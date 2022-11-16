import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { Address } from '../../types';
import { updateAddress } from '../../lib/client';

type FormData = {
	state: string;
	city: string;
	street: string;
	floor: string;
	neighbourhood: string;
	nameRecipient: string;
};

function DialogEditAddress({ address }: { address: Address }) {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit(async(data) => {
		const tmp = await updateAddress(data, address._id);
		window.location.reload();
	});
	console.log(address._id)
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
						/>
					</svg>
				</button>
			</Dialog.Trigger>
			<Dialog.Portal className="relative">
				<Dialog.Portal className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0">
					<Dialog.Overlay>
						<div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
						<Dialog.Content className="overflow-y-auto overscroll-x-none fixed  rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-auto w-2/4 shadow-2xl bg-white px-8 py-8">
							<h2 className="text-2xl font-semibold">Editar dirección</h2>
							<form
								onSubmit={onSubmit}
								className="flex flex-col justify-center mx-auto pb-5"
							>
								<div className="flex flex-row mt-3">
									<div className="flex flex-col w-1/2">
										<label className="pb-1">Departamento</label>
										<input
											defaultValue={address.state}
											placeholder={address.state}
											{...register('state', { required: true })}
											className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
										/>
									</div>
									<div className="flex flex-col w-1/2">
										<label className="pb-1">Ciudad</label>
										<input
											defaultValue={address.city}
											placeholder={address.city}
											{...register('city', { required: true })}
											className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
										/>
									</div>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Dirección</label>
									<input
										defaultValue={address.street}
										placeholder={address.street}
										{...register('street', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Piso o apartamento</label>
									<input
										defaultValue={address.floor}
										placeholder={address.floor}
										{...register('floor', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Barrio</label>
									<input
										defaultValue={address.neighbourhood}
										placeholder={address.neighbourhood}
										{...register('neighbourhood', { required: true })}
										className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
									/>
								</div>
								<div className="flex flex-col w-full">
									<label className="pb-1">Persona que va a recibir</label>
									<input
										defaultValue={address.nameRecipient}
										placeholder={address.nameRecipient}
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

export default DialogEditAddress;
