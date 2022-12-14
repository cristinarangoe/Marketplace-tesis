import Router, { useRouter } from 'next/router';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authUser } from '../../lib/auth';
import { SupabaseAuthUser } from '../../types/user';
import { setUserSession, userSignal } from '../../signals/userSignal';
import { BusinessInfo } from '../../types/business';

type FormData = {
	email: string;
	password: string;
};

const FormLogIn = () => {
	// const { saveSession } = useUserContext();
	const router = useRouter();
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			const user = await authUser(data);
			if (!user.user) throw Error('not user');
			const userSession: SupabaseAuthUser = {
				email: user.user.email!,
				user_metadata: user.user.user_metadata! as {
					userType: 'client' | 'business';
				},
			};

			await setUserSession(userSession);
			if (user.user.user_metadata.userType == 'business') {
				router.push(
					`/business/${(userSignal.value?.data as BusinessInfo)._id}`
				);
			}
			if (user.user.user_metadata.userType == 'client') {
				router.push('/');
			}
		} catch (e) {
			console.log('loginerror', e);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-center mx-auto px-10"
		>
			<div className="flex flex-col mt-3">
				<label className="pb-1">Correo electrónico</label>
				<input
					type="email"
					{...register('email', { required: true })}
					className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
				/>
			</div>
			<div className="flex flex-col pt-5">
				<label className="pb-1">Contraseña</label>
				<input
					type="password"
					{...register('password', { required: true })}
					className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
				/>
			</div>

			<input
				type="submit"
				value="Iniciar sesión"
				className=" mt-5 py-2 px-3 rounded-md bg-medium-violet text-white font-medium text-lg"
			/>
		</form>
	);
};

export default FormLogIn;
