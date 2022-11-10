import Image, { StaticImageData } from 'next/image';
import { type } from 'os';
import React, { useRef, useState } from 'react';
import {
	Control,
	useFieldArray,
	useForm,
	UseFormRegister,
	UseFormRegisterReturn,
} from 'react-hook-form';
import { generateVariants, ProductsGenerated } from '../../lib/products';
import { GenericInput } from '../genericInput';

type FormData = {
	name: string;
	description: string;
	hasVariants: string;
	variantsFields: {
		type: string;
		options: string;
	}[];
	image?: FileList;
	price?: number;
};

interface SectionsProps {
	register: UseFormRegister<FormData>;
	control?: Control<FormData, any>;
}

const NoVariantsSection = ({ register }: SectionsProps) => {
	const imageRef = useRef(null);
	const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && imageRef.current) {
			if (e.target.files[0]) {
				(imageRef.current! as { src: string }).src = URL.createObjectURL(
					e.target.files[0]
				);
			}
		}
	};

	return (
		<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 rounded-md gap-4 bg-purple-200 border-purple-400 border-2 ">
			<label>Media:</label>
			<div className="w-full border-2 border-purple-500 rounded-md h-40 flex justify-center items-center border-dotted">
				<figure>
					<img width="50" height="50" alt="image" ref={imageRef} />
				</figure>
				<input
					{...register('image', { required: true })}
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
			</div>
			<GenericInput
				label="Precio:"
				inputProps={register('price', { required: true })}
			/>
			<button type="submit">Continuar</button>
		</section>
	);
};

const VariantsSection = ({ control, register }: SectionsProps) => {
	const { fields, append, remove } = useFieldArray({
		name: 'variantsFields',
		control,
	});

	return (
		<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 rounded-md gap-4 bg-purple-200 border-purple-400 border-2 ">
			<h4>Variantes</h4>
			<hr className=" border-black" />
			{fields.map((field, key) => {
				return (
					<div className="" key={key}>
						<div className="flex flex-row justify-between pr-6">
							<p>opcion {key + 1}</p>
							<button
								onClick={() => remove(key)}
								className="inline-block w-[24px] h-[24px] bg-red-400 rounded-full text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-[24px] h-[20px] text-red-700"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="flex flex-row gap-5 border-b border-black pb-5 mt-4">
							<select
								{...register(`variantsFields.${key}.type`, { required: true })}
							>
								<option value="tamaño">tamaño</option>
								<option value="color">color</option>
							</select>
							<input
								type="text"
								{...register(`variantsFields.${key}.options`, {
									required: true,
								})}
								className="mr-8 p-1 mt-2 rounded-md w-full"
								placeholder="separar cada opcion por una coma"
							/>
						</div>
					</div>
				);
			})}

			<button
				className="self-start"
				type="button"
				onClick={() =>
					append({
						type: 'tamaño',
						options: '',
					})
				}
			>
				agregar opcion
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
	image: FileList;
	price: number;
}
interface ProductsVariants {
	products: {
		image: FileList;
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

	const onSubmit = handleSubmit((data) => {
		const products = [];
		for (let i = 0; i < variants.length; i++) {
			const p: Product = {
				...variants[i],
				image: data.products[i].image,
				price: data.products[i].price,
			};
			products.push(p);
		}
		console.log(products);
	});

	const PlaceholderName = ({ n }: { n: string }) => <p>{n.split(' ').pop()}</p>;

	return (
		<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 rounded-md gap-8 bg-purple-200 border-purple-400 border-2 ">
			<form onSubmit={onSubmit} className="flex flex-col space-y-4">
				{variants.map((v, key) => (
					<div className="flex flex-row space-x-3" key={key}>
						<PlaceholderName n={v.name} />
						<input
							type={'number'}
							{...register(`products.${key}.price`, { required: true })}
						/>
						<input
							type="file"
							accept="image/*"
							{...register(`products.${key}.image`, { required: true })}
						/>
					</div>
				))}
				<button>create products</button>
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
			<h1 className="text-3xl">Agregar producto a catalogo</h1>
			{generating ? <p>loading</p> : null}
			{!variants ? (
				<form onSubmit={onSubmit} className="flex flex-col w-full">
					<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 rounded-md gap-8 bg-purple-200 border-purple-400 border-2 ">
						<h4 className="text-center text-lg font-bold">Primera etapa</h4>
						<GenericInput
							label="Nombre:"
							inputProps={register('name', { required: true })}
						/>
						<div className="flex flex-col justify-start ">
							<label className="text-gray-700">Descripción:</label>
							<textarea
								{...register('description', { required: true })}
								className="mr-8 p-1 rounded-md w-full mt-2"
							/>
						</div>
						<section
							aria-label="variantes"
							className="flex flex-col items-start"
						>
							<p>Variants:</p>
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
							className=" mt-5 mx-auto py-1 px-3 rounded-md bg-purple-700 text-white"
							type="submit"
						>
							Generar variantes
						</button>
					) : hasVariants == false ? (
						<button
							className=" mt-5 mx-auto py-1 px-3 rounded-md bg-purple-700 text-white"
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
