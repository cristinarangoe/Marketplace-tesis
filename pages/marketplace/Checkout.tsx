import Link from 'next/link';
import React, { useState } from 'react';
import CheckoutProductItem from '../../components/Cart/CheckoutProductItem';
import GoBack from '../../components/Navbar-Navigation/GoBack';
import { useCartContext } from '../../Context/Index';
import { useForm } from 'react-hook-form';
import { Address, Order } from '../../types';
import DialogAddAddress from '../../components/UserProfileMarketplace/DialogAddAddress';
import { userSignal } from '../../signals/userSignal';
import useSWR from 'swr';
import { CLIENT_URL, generateOrder } from '../../lib/client';
import fetcher from '../../lib/utils';
import AddAddress from '../../components/Cart/AddAddress';
import { useRouter } from 'next/router';
import { useComputed } from '@preact/signals-react';

type FormData = {
	paymentMethod: any;
	address: string;
};

function Checkout() {
	const { productsCartProp, clearProp, totalCostProp } = useCartContext();
	let router = useRouter();

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const datosComprador = useComputed(() => userSignal.value);

	const { data, error } = useSWR<Address[], Error>(
		`${CLIENT_URL}/address/${userSignal.value?.data._id}`,
		fetcher
	);

	let addreses: Address[] | undefined = data;

	const onSubmit = handleSubmit(async (dataForm) => {
		const addressForm: Address = JSON.parse(dataForm.address);
		const order: Order = {
			client: {
				_id: datosComprador.value!.data._id,
				email: datosComprador.value!.data.email,
				name: `${datosComprador.value!.data.firstName} ${
					datosComprador.value!.data.secondName
				} ${datosComprador.value!.data.firstLastName} ${
					datosComprador.value!.data.secondLastName
				}`,
				id: datosComprador.value!.data.ID,
				idType: datosComprador.value!.data.IDType,
				phone: datosComprador.value!.data.phone,
			},
			// address : JSON.parse(dataForm.address),
			address: {
				state: addressForm.state,
				city: addressForm.city,
				street: addressForm.street,
				floor: addressForm.floor,
				neighbourhood: addressForm.neighbourhood,
				nameRecipient: addressForm.nameRecipient,
				_id: addressForm._id,
			},
			paymentMethod: dataForm.paymentMethod,
			products: productsCartProp,
			totalPrice: totalCostProp,
			idUser: datosComprador.value!.data._id,
		};

		const a = await generateOrder(order);
		router.push(`/marketplace/FinishedOrder`);
		console.log(a);
	});

	return (
		<div>
			<GoBack link="/marketplace/Cart" text="Carrito" />
			<form className="flex flex-row mx-5 mt-5" onSubmit={onSubmit}>
				<div className="basis-2/3  bg-white mr-8">
					<div className="shadow-lg px-8 py-5 border border-gray-200 rounded-lg">
						<div>
							<h2 className="text-lg text-gray-400">01</h2>
							<h2 className="text-2xl font-semibold">Datos del comprador</h2>
						</div>
						<div>
							<p>
								{datosComprador.value?.data.firstName}{' '}
								{datosComprador.value?.data.secondName}{' '}
								{datosComprador.value?.data.firstLastName}{' '}
								{datosComprador.value?.data.secondLastName}
							</p>
							<p>N??mero de documento: {datosComprador.value?.data.ID}</p>
							<p>{datosComprador.value?.data.email}</p>
							<p>Tel??fono: {datosComprador.value?.data.phone}</p>
						</div>
					</div>
					<div className="shadow-lg px-8 py-5 mt-5 border border-gray-200 rounded-lg">
						<div>
							<h2 className="text-lg text-gray-400">02</h2>
							<h2 className="text-2xl font-semibold">Entrega</h2>
							{errors.address?.type === 'required' ? (
								<p className="text-base mt-3 text-red-500">
									Selecciona por favor tu direcci??n de entrega.
								</p>
							) : (
								<p className="text-base mt-3">
									Selecciona por favor tu direcci??n de entrega.
								</p>
							)}
							{addreses != undefined ? (
								<div className="flex flex-col">
									{addreses.map((address, index) => (
										<div
											className="form-check mt-3 border-2 border-gray-200 rounded-md py-2 px-3 "
											key={index}
										>
											<label htmlFor={`address${index}`}>
												<input
													{...register('address', { required: true })}
													type="radio"
													value={JSON.stringify(address)}
													className="form-check-input"
													id={`address${index}`}
												/>{' '}
												<div>
													<p>
														{address.street}, {address.floor},{' '}
														{address.neighbourhood}
													</p>
													<p>
														{address.city}, {address.state}
													</p>
													<p>{address.nameRecipient}</p>
												</div>
											</label>
										</div>
									))}
								</div>
							) : (
								<h2>No hay direcciones, ingresa una</h2>
							)}
							{/* <input
                type="submit"
                className="btn btn-dark mt-4"
                value="register"
              /> */}
						</div>
					</div>
					<div className="shadow-lg px-8 py-5 mt-5 border border-gray-200 rounded-lg">
						<div>
							<h2 className="text-lg text-gray-400">03</h2>
							<h2 className="text-2xl font-semibold">M??todo de pago</h2>
							{errors.paymentMethod?.type === 'required' ? (
								<p className="text-base mt-3 text-red-500">
									Selecciona por favor el m??todo que deseas usar para realizar
									el pago.
								</p>
							) : (
								<p className="text-base mt-3">
									Selecciona por favor el m??todo que deseas usar para realizar
									el pago.
								</p>
							)}
							<div className="grid grid-cols-3 gap-x-4">
								<div className="form-check mt-3 border-2 border-gray-200 rounded-md py-2 px-3 ">
									<label htmlFor="Tarjetas de cr??dito/d??bito">
										<input
											{...register('paymentMethod', { required: true })}
											type="radio"
											value="Tarjetas de cr??dito/d??bito"
											className="form-check-input"
											id="Tarjetas de cr??dito/d??bito"
										/>{' '}
										Tarjetas de cr??dito/d??bito
									</label>
								</div>
								<div className="form-check mt-3 border-2 border-gray-200 rounded-md py-2 px-3">
									<label htmlFor="PSE">
										<input
											{...register('paymentMethod', { required: true })}
											type="radio"
											value="PSE"
											className="form-check-input"
											id="PSE"
										/>{' '}
										PSE
									</label>
								</div>
								<div className="form-check mt-3 border-2 border-gray-200 rounded-md py-2 px-3">
									<label htmlFor="Pago contra entrega">
										<input
											{...register('paymentMethod', { required: true })}
											type="radio"
											value="Pago contra entrega"
											className="form-check-input"
											id="Pago contra entrega"
										/>{' '}
										Pago contra entrega
									</label>
								</div>
								<div className="form-check mt-3 border-2 border-gray-200 rounded-md py-2 px-3">
									<label htmlFor="Bot??n Bancolombia">
										<input
											{...register('paymentMethod', { required: true })}
											type="radio"
											value="Bot??n Bancolombiaa"
											className="form-check-input"
											id="Bot??n Bancolombia"
										/>{' '}
										Bot??n Bancolombia
									</label>
								</div>
							</div>
							{/* <input
                type="submit"
                className="btn btn-dark mt-4"
                value="register"
              /> */}
						</div>
					</div>
				</div>
				<div className="basis-1/3 rounded-lg bg-white shadow-lg px-8 py-5 items-center border border-gray-200 h-fit">
					<h2 className="text-2xl font-semibold">Resumen de la compra</h2>
					<div>
						{productsCartProp.map((prod, index) => (
							<CheckoutProductItem prod={prod} key={index} />
						))}
					</div>

					<div className="mt-3">
						<div className="flex flex-col text-black text-lg">
							<div className="flex justify-between">
								<h2>Subtotal</h2>
								<h2>${totalCostProp}</h2>
							</div>
							<div className="flex justify-between">
								<h2>Envio</h2>
								<h2>$4000</h2>
							</div>
						</div>
						<div className="text-black text-lg">
							<div className="flex justify-between ">
								<h2>Total</h2>
								<h2>$ {4000 + totalCostProp}</h2>
							</div>
						</div>
					</div>
					<input
						type="submit"
						className="bg-medium-violet px-2 py-1 rounded-md font-semibold text-tiffany-green my-3 w-full border-2 border-medium-violet"
						value="Finalizar la compra"
					/>
					{/* <button className="bg-medium-violet px-2 py-1 rounded-md font-semibold text-tiffany-green my-3 w-full border-2 border-medium-violet">
            <Link href="/Marketplace/Cart">Finalizar la compra</Link>
          </button> */}
				</div>
			</form>
		</div>
	);
}

export default Checkout;
