import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerClient } from '../../lib/auth';
import { ClientSchema } from '../../types';

type FormData = {
	firstName: string;
	secondName: string;
	firstLastName: string;
	secondLastName: string;
	phone: number;
	email: string;
	IDType: string;
	ID: string;
	password: string;
	confirmPassword: string;
};

type submitStatus = 201 | 500;

const FormSignInClients = () => {
	const [submitStatus, setSubmitStatus] = useState<null | submitStatus>(null);
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState<boolean | null>(null);
	const [isSuccess, setSuccess] = useState(false);
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<ClientSchema>();
	const onSubmit: SubmitHandler<ClientSchema> = async (data) => {
		setError(null);
		setLoading(true);
		const r = await registerClient(data);
		if (r.ok == false) setError(true);
		setLoading(false);
		if (r.status == 201) setSuccess(true);
	};

	//TODO: hacer mas especificos los mensajes
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
							className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
				</div>

				<div className="flex flex-col mt-3">
					<label className="pb-1">N??mero de telefono</label>
					<input
						{...register('phone', { required: true })}
						className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>
				<div className="flex flex-col mt-3 ">
					<label className="pb-1">Correo electr??nico</label>
					<input
						type="email"
						{...register('email', { required: true })}
						className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
					/>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Tipo de identificaci??n</label>
						<select
							{...register('IDType', { required: true })}
							className="mr-8 p-1 h-full  rounded-md border-2 border-gray-200 shadow-sm"
						>
							<option value="CC">Cedula de ciudadania</option>
							<option value="TI">Tarjeta de identidad</option>
							<option value="CE">Cedula de extranjer??a</option>
							<option value="Otro">Otro</option>
						</select>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">N??mero de identificaci??n</label>
						<input
							{...register('ID', { required: true })}
							className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
				</div>

				<div className="flex flex-row mt-3">
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Contrase??a</label>
						<input
							type="password"
							{...register('password', { required: true })}
							className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label className="pb-1">Repetir Contrase??a</label>
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
						<div className="text-center  bg-white rounded-full px-6 py-1 text-blue-700">
							Cargando informaci??n
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
						<div className="text-center  bg-white rounded-full px-6 py-1 text-green-700">
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

export default FormSignInClients;
