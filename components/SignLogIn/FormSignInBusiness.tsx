import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerClient, registerEntrepreneur } from '../../lib/auth';
import { EntrepreneurSchema } from '../../types';

type FormData = {
	firstName: string;
	secondName: string;
	firstLastName: string;
	secondLastName: string;

	phone: number;
	email: string;
	IDType: string;
	ID: string;
	businessType: String;
	businessName: string;
	password: string;
	confirmPassword: string;
};

const FormSignInBusiness = () => {
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState<boolean | null>(null);
	const [isSuccess, setSuccess] = useState(false);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<EntrepreneurSchema>();

	const onSubmit: SubmitHandler<EntrepreneurSchema> = async (data) => {
		setError(null);
		setLoading(true);
		const r = await registerEntrepreneur(data);
		if (r.ok == false) setError(true);
		setLoading(false);
		if (r.status == 201) setSuccess(true);
	};

	var categoria: string[] = [
		'Moda',
		'Alimentos',
		'Productos para mascotas',
		'Hogar',
		'Regalos/variedades',
		'Belleza',
		'Inmobiliario',
		'Tecnologia',
	];

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center mx-auto bg-red-300 px-5 "
			>
				<div className="mt-4 flex flex-row justify-center min-h-[32px]">
					{/* loading */}
					{isLoading ? (
						<div className="text-center  bg-white rounded-full px-6 py-1">
							loading
						</div>
					) : null}
					{/* error */}
					{isError ? (
						<div className="text-center  bg-white rounded-full px-6 py-1">
							error
						</div>
					) : null}
					{/* Success */}
					{isSuccess ? (
						<div className="text-center  bg-white rounded-full px-6 py-1">
							success message
						</div>
					) : null}
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="">Primer nombre</label>
						<input
							{...register('firstName', { required: true })}
							className="mr-8 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label>Segundo nombre</label>
						<input
							{...register('secondName', { required: false })}
							className=" p-1 rounded-md"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="">Primer apellido</label>
						<input
							{...register('firstLastName', { required: true })}
							className="mr-8 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label>Segundo apellido</label>
						<input
							{...register('secondLastName', { required: false })}
							className=" p-1 rounded-md"
						/>
					</div>
				</div>

				<div className="flex flex-col mt-3">
					<label>Número de telefono</label>
					<input
						{...register('phone', { required: true })}
						className=" p-1 rounded-md"
					/>
				</div>
				<div className="flex flex-col mt-3 ">
					<label>Correo electrónico</label>
					<input
						{...register('email', { required: true })}
						className=" p-1 rounded-md"
					/>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-2/6">
						<label>Tipo de identificación</label>
						<select
							{...register('IDType', { required: true })}
							className="mr-8 p-1 rounded-md h-full"
						>
							<option value="CC">Cedula de ciudadania</option>
							<option value="CE">Cedula de extranjería</option>
							<option value="Rut">Tarjeta de identidad</option>
						</select>
					</div>
					<div className="flex flex-col w-4/6">
						<label>Número de identificación</label>
						<input
							{...register('ID', { required: true })}
							className="mr-8 p-1 rounded-md"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="">Nombre del negocio</label>
						<input
							{...register('businessName', { required: true })}
							className="mr-8 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label>Categoria de productos</label>
						<select
							{...register('businessType', { required: true })}
							className=" p-1 rounded-md h-full"
						>
							{categoria.map((cat, key) => (
								<option key={key} value={cat}>
									{cat}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="">Contraseña</label>
						<input
							type="password"
							{...register('password', { required: true })}
							className="mr-8 p-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label>Repetir Contraseña</label>
						<input
							type="password"
							{...register('confirmPassword', { required: true })}
							className=" p-1 rounded-md"
						/>
					</div>
				</div>

				<input
					type="submit"
					value="Registrarse"
					className=" mt-5 mx-auto py-2 px-3 rounded-md bg-green-600"
				/>
			</form>
		</div>
	);
};

export default FormSignInBusiness;
