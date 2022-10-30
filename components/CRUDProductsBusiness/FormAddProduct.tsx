import React, { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { GenericInput } from '../genericInput';

type FormData = {
	name: string;
	description: string;
	radio: string;
};

const FormAddProduct = () => {
	const [hasVariants, setHasVariants] = useState<boolean | null>(null);
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit((data) => console.log(data));

	const radioRegister = register('radio', { required: true });

	const onchangeHasVariants = (v: React.ChangeEvent<HTMLInputElement>) => {
		if (v.target.value === 'true') setHasVariants(true);
		if (v.target.value === 'false') setHasVariants(false);
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-3xl">Agregar producto a catalogo</h1>
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
					<section aria-label="variantes" className="flex flex-col items-start">
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
					<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 rounded-md gap-4 bg-purple-200 border-purple-400 border-2 ">
						<h4>add variants</h4>
					</section>
				) : hasVariants == false ? (
					<section className="flex flex-col w-1/2 mx-auto px-5 py-6 mt-8 rounded-md gap-4 bg-purple-200 border-purple-400 border-2 ">
						<h4>no variants</h4>
					</section>
				) : null}

				<button
					className=" mt-5 mx-auto py-1 px-3 rounded-md bg-purple-700 text-white"
					type="submit"
				>
					Continuar
				</button>
			</form>
		</div>
	);
};

export default FormAddProduct;
