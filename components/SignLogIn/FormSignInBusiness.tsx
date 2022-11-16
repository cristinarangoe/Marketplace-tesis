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
		<div className=''>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center mx-auto px-5 pb-5"
			>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Primer nombre</label>
						<input
							{...register('firstName', { required: true })}
							className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Segundo nombre</label>
						<input
							{...register('secondName', { required: false })}
							className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Primer apellido</label>
						<input
							{...register('firstLastName', { required: true })}
							className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Segundo apellido</label>
						<input
							{...register('secondLastName', { required: false })}
							className=" p-1 rounded-md border-2 border-gray-200 shadow-smd"
						/>
					</div>
				</div>

				<div className="flex flex-col mt-3">
					<label className="pb-1">Número de telefono</label>
					<input
						{...register('phone', { required: true })}
						className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div className="flex flex-col mt-3 ">
					<label className="pb-1">Correo electrónico</label>
					<input
						{...register('email', { required: true })}
						className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Tipo de identificación</label>
						<select
							{...register('IDType', { required: true })}
							className="mr-8 p-1 h-full rounded-md border-2 border-gray-200 shadow-sm "
						>
							<option value="CC">Cedula de ciudadania</option>
							<option value="CE">Cedula de extranjería</option>
							<option value="Rut">Tarjeta de identidad</option>
						</select>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Número de identificación</label>
						<input
							{...register('ID', { required: true })}
							className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Nombre del negocio</label>
						<input
							{...register('businessName', { required: true })}
							className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Categoria de productos</label>
						<select
							{...register('businessType', { required: true })}
							className=" p-1  h-full rounded-md border-2 border-gray-200 shadow-sm"
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
						<label className="pb-1">Contraseña</label>
						<input
							type="password"
							{...register('password', { required: true })}
							className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Repetir Contraseña</label>
						<input
							type="password"
							{...register('confirmPassword', { required: true })}
							className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
				</div>
				<div className="flex flex-row ">
					{/* loading */}
					{isLoading ? (
						<div className="text-center  bg-white rounded-full px-6 py-1 text-blue-500">
							Cargando información
						</div>
					) : <div className='hidden'></div>}
					{/* error */}
					{isError ? (
						<div className="text-center  bg-white rounded-full px-6 py-1 text-red-500">
							Hubo un error. Intenta de nuevo.
						</div>
					) : <div className='hidden'></div>}
					{/* Success */}
					{isSuccess ? (
						<div className="text-center  bg-white rounded-full px-6 py-1 text-green-500">
							Tu cuenta ha sido creada. Revisa tu correo para confirmar la cuenta.
						</div>
					) : <div className='hidden'></div>}
				</div>
				<input
					type="submit"
					value="Registrarse"
					className=" mt-5 py-2 px-3 rounded-md bg-medium-violet text-white font-medium text-lg"
				/>
			</form>
		</div>
	);
};

export default FormSignInBusiness;
