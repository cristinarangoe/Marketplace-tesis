import Image, { StaticImageData } from 'next/image';
import { type } from 'os';
import React, { createRef, useEffect, useRef, useState } from 'react';
import {
	Control,
	useFieldArray,
	useForm,
	UseFormRegister,
	UseFormRegisterReturn,
} from 'react-hook-form';
import { saveProducts } from '../../lib/business/products';
import { generateVariants, ProductsGenerated } from '../../lib/products';
import { userSignal } from '../../signals/userSignal';

import { DBProduct } from '../../types/products';
import { BusinessUser } from '../../types/user';
import { GenericInput } from '../genericInput';

type FormData = {
	name: string;
	description: string;
	hasVariants: string;
	variantsFields: {
		type: string;
		options: string;
	}[];
	image?: string;
	price?: number;
};

interface SectionsProps {
	register: UseFormRegister<FormData>;
	control?: Control<FormData, any>;
}

const NoVariantsSection = ({ register }: SectionsProps) => {
	//   const imageRef = useRef(null);
	//   const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
	//     if (e.target.files && imageRef.current) {
	//       if (e.target.files[0]) {
	//         (imageRef.current! as { src: string }).src = URL.createObjectURL(
	//           e.target.files[0]
	//         );
	//       }
	//     }
	//   };

	return (
		<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 gap-4 rounded-xl border border-gray-200 bg-white shadow-lg">
			<label>URL de la imágen</label>
			<input
				className="rounded-md border-2 border-gray-200 shadow-sm"
				type={'text'}
				{...register('image', { required: true })}
			/>
			{/* <div className="w-full rounded-md border-2 border-gray-200 shadow-sm h-40 flex justify-center items-center border-dotted">
        <figure>
          <img width="50" height="50" alt="image" ref={imageRef} />
        </figure>
        <input
          {...register("image", { required: true })}
          className="block text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          type="file"
          accept="image/*"
          onChange={onImageUpload}
        />
      </div> */}
			<GenericInput
				label="Precio"
				inputProps={register('price', { required: true })}
			/>
		</section>
	);
};

const VariantsSection = ({ control, register }: SectionsProps) => {
	const { fields, append, remove } = useFieldArray({
		name: 'variantsFields',
		control,
	});

	return (
		<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8  gap-4  rounded-xl border border-gray-200 bg-white shadow-lg">
			<h4>Variantes</h4>
			<hr className=" border-black" />
			{fields.map((field, key) => {
				return (
					<div className="" key={key}>
						<div className="flex flex-row justify-between pr-6">
							<p>Opción {key + 1}</p>
							<button
								onClick={() => remove(key)}
								className="inline-block w-[24px] h-[24px] bg-red-500 rounded-full text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="white"
									className="w-[24px] h-[20px]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="flex flex-row gap-4 border-b border-black pb-5 mt-4">
							<select
								className=" px-2 rounded-md border-2 border-gray-200 shadow-sm"
								{...register(`variantsFields.${key}.type`, { required: true })}
							>
								<option value="tamaño">Tamaño</option>
								<option value="color">Color</option>
							</select>
							<input
								type="text"
								{...register(`variantsFields.${key}.options`, {
									required: true,
								})}
								className="mr-8 p-1 py-2 mt-2 rounded-md w-full border-2 border-gray-200 shadow-sm"
								placeholder="Separar cada opción por una coma"
							/>
						</div>
					</div>
				);
			})}

			<button
				className="self-start bg-medium-violet text-white font-medium px-2 py-1 rounded-md"
				type="button"
				onClick={() =>
					append({
						type: 'tamaño',
						options: '',
					})
				}
			>
				Agregar opción
			</button>
		</section>
	);
};

export interface Product {
	name: string;
	description: string;
	characteristics: {
		type: string;
		value: string;
	}[];
	image: string;
	price: number;
}
interface ProductsVariants {
	products: {
		image: string;
		price: number;
	}[];
}

const GeneratedVariantsSection = ({
	variants,
}: {
	variants: ProductsGenerated[];
}) => {
	const {
		register,
		control,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<ProductsVariants>();

	const { fields, append, remove } = useFieldArray({
		name: 'products',
		control,
	});

	const onSubmit = handleSubmit(async (data) => {
		const products: DBProduct[] = [];

		if (userSignal.value != undefined) {
			for (let i = 0; i < variants.length; i++) {
				products.push({
					...variants[i],
					idBusiness: (userSignal.value! as BusinessUser).businessInfo._id,
					businessType: (userSignal.value! as BusinessUser).businessInfo
						.businessType,
					image: data.products[i].image,
					price: data.products[i].price,
				});
			}
			console.log(products);
			const res = await saveProducts(products);
			console.log(res);
		} else {
			alert("can't find user data");
		}
	});

	const PlaceholderName = ({ n }: { n: string }) => <p>{n.split(' ').pop()}</p>;

	return (
		<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8  gap-4 rounded-xl border border-gray-200 bg-white shadow-lg">
			<form onSubmit={onSubmit} className="flex flex-col space-y-4">
				<div className="flex flex-row border-b">
					<div className="text-xl basis-1/3">Nombre</div>
					<div className="text-xl basis-1/3">Precio</div>
					<div className="text-xl basis-1/3">URL Imágen</div>
				</div>
				{variants.map((v, key) => (
					<div className="flex flex-row" key={key}>
						<div className="basis-1/3">
							<PlaceholderName n={v.name} />
						</div>
						<div className="basis-1/3">
							{' '}
							<input
								className="rounded-md border-2 border-gray-200 shadow-sm"
								type={'number'}
								{...register(`products.${key}.price`, { required: true })}
							/>
						</div>
						<div className="basis-1/3">
							{/* <input
                type="file"
                accept="image/*"
                {...register(`products.${key}.image`, {
                  required: true,
                })}
              /> */}
							<input
								className="rounded-md border-2 border-gray-200 shadow-sm"
								type={'text'}
								{...register(`products.${key}.image`, { required: true })}
							/>
						</div>
					</div>
				))}
				<button className="bg-medium-violet text-white font-semibold py-1 px-2 rounded-md">
					Crear productos
				</button>
			</form>
		</section>
	);
};

const FormAddProduct = () => {
	const [hasVariants, setHasVariants] = useState<boolean | null>(null);
	const [generating, setGenerating] = useState<boolean>(false);
	const [variants, setVariants] = useState<ProductsGenerated[]>();
	const {
		register,
		control,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			variantsFields: [
				{
					type: 'tamaño',
					options: '',
				},
			],
		},
	});

	const radioRegister = register('hasVariants', {
		required: true,
	});

	const onchangeHasVariants = (v: React.ChangeEvent<HTMLInputElement>) => {
		if (v.target.value === 'true') setHasVariants(true);
		if (v.target.value === 'false') setHasVariants(false);
	};

	const onSubmit = handleSubmit((data) => {
		if (data.hasVariants === 'true') {
			setGenerating(true);
			const v = generateVariants(data);
			setVariants(v);
			setGenerating(false);
		}
	});

	return (
		<div className="flex flex-col items-center">
			<h1 className="font-bold text-3xl">Agregar producto</h1>
			<h2 className="font-medium text-lg pt-3">
				Ingresa los datos del producto
			</h2>
			{generating ? <p>loading</p> : null}
			{!variants ? (
				<form onSubmit={onSubmit} className="flex flex-col w-full">
					<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 gap-4  rounded-xl border border-gray-200 bg-white shadow-lg ">
						<GenericInput
							label="Nombre"
							inputProps={register('name', { required: true })}
						/>
						<div className="flex flex-col justify-start ">
							<label className="text-gray-700">Descripción</label>
							<textarea
								{...register('description', { required: true })}
								className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm w-full mt-2"
							/>
						</div>
						<section
							aria-label="variantes"
							className="flex flex-col items-start"
						>
							<p>¿Tiene variantes tu producto?</p>
							<div className="flex flex-row gap-4">
								<div className="mt-2 flex flex-col justify-center">
									<input
										{...radioRegister}
										type="radio"
										value="true"
										onChange={(v) => onchangeHasVariants(v)}
									/>
									<label htmlFor="">Si</label>
								</div>
								<div className="mt-2 flex flex-col justify-center">
									<input
										{...radioRegister}
										type="radio"
										value="false"
										onChange={(v) => onchangeHasVariants(v)}
									/>
									<label htmlFor="">No</label>
								</div>
							</div>
						</section>
					</section>
					{hasVariants == true ? (
						<VariantsSection register={register} control={control} />
					) : hasVariants == false ? (
						<NoVariantsSection register={register} />
					) : null}
					{hasVariants == true ? (
						<button
							className=" mt-5 mx-auto py-1 px-3 rounded-md bg-medium-violet text-white font-semibold"
							type="submit"
						>
							Generar variantes
						</button>
					) : hasVariants == false ? (
						<button
							className=" mt-5 mx-auto py-1 px-3 rounded-md bg-medium-violet text-white font-semibold"
							type="submit"
						>
							Guardar producto
						</button>
					) : null}
				</form>
			) : (
				<GeneratedVariantsSection variants={variants} />
			)}
		</div>
	);
};

export default FormAddProduct;
