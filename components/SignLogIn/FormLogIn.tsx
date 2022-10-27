import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authUser } from '../../lib/auth';

type FormData = {
	email: string;
	password: string;
};

const FormLogIn = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			const user = await authUser(data);
			console.log(user);
		} catch (e) {
			console.log('loginerror', e);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center mx-auto bg-red-300 px-5"
		>
			<div className="flex flex-col mt-3">
				<label className="">Correo electrónico</label>
				<input
					type="email"
					{...register('email', { required: true })}
					className=" p-1 rounded-md"
				/>
			</div>
			<div className="flex flex-col ">
				<label className="">Contraseña</label>
				<input
					type="password"
					{...register('password', { required: true })}
					className=" p-1 rounded-md"
				/>
			</div>

			<input
				type="submit"
				value="Iniciar sesión"
				className=" mt-5 mx-auto py-2 px-3 rounded-md bg-green-600"
			/>
		</form>
	);
};

export default FormLogIn;
