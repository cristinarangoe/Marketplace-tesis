import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { Address } from '../../types';
import { saveAddress } from '../../lib/client';
import { userSignal } from '../../signals/userSignal';

type FormData = {
	state: string;
	city: string;
	street: string;
	floor: string;
	neighbourhood: string;
	nameRecipient: string;
};

function DialogAddAddress() {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit(async (data) => {
		const res = await saveAddress({
			idUser: userSignal.value!.data._id,
			...data,
			_id: '',
		});
		window.location.reload();
	});
	return (
		<Dialog.Root>
			<Dialog.Trigger className="font-semibold bg-medium-violet text-white py-3 px-6 rounded-lg">
				Añadir dirección
			</Dialog.Trigger>
			<Dialog.Portal className="relative">
				<Dialog.Portal className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0">
					<Dialog.Overlay>
						<div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
						<Dialog.Content className="overflow-y-auto overscroll-x-none fixed  rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-auto w-2/4 shadow-2xl bg-white px-8 py-8">
							<h2 className="text-2xl font-semibold">Añadir dirección</h2>
							<form
								onSubmit={onSubmit}
								className="flex flex-col justify-center mx-auto pb-5"
							>
								<div className="flex flex-row mt-3">
									<div className="flex flex-col w-1/2">
										<label className="pb-1">Departamento</label>
										<input
											{...register('state', { required: true })}
											className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
										/>
									</div>
									<div className="flex flex-col w-1/2">
										<label className="pb-1">Ciudad</label>
										<input
											{...register('city', { required: true })}
											className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
										/>
									</div>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Dirección</label>
									<input
										{...register('street', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Piso o apartamento</label>
									<input
										{...register('floor', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Barrio</label>
									<input
										{...register('neighbourhood', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Persona que va a recibir</label>
									<input
										{...register('nameRecipient', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<input
									type="submit"
									value="Guardar dirección"
									className=" mt-5 py-2 px-3 rounded-md bg-medium-violet text-white font-medium text-lg"
								/>
							</form>
						</Dialog.Content>
					</Dialog.Overlay>
				</Dialog.Portal>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default DialogAddAddress;
