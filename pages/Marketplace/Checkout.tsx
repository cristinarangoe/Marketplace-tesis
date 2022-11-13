import Link from 'next/link';
import React from 'react';
import CheckoutProductItem from '../../components/Cart/CheckoutProductItem';
import GoBack from '../../components/Navbar-Navigation/GoBack';
import { useGlobalContext } from '../../Context/Index';
import { useForm } from 'react-hook-form';
import { address } from '../../types';
import DialogAddAddress from '../../components/UserProfileMarketplace/DialogAddAddress';

type FormData = {
	paymentMethod: any;
	address: address;
};

function Checkout() {
	const { productsCartProp, clearProp, totalCostProp } = useGlobalContext();
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = handleSubmit((data) => console.log(data));

	let addreses: address[] = [
		{
			state: 'Antioquia',
			city: 'Medellín',
			street: 'Calle 7 sur #23-03',
			floor: 'apto 1304',
			neighbourhood: 'El poblado',
			nameRecipient: 'Cristina Arango Escobar',
		},
		{
			state: 'Antioquia',
			city: 'Medellín',
			street: 'Calle 7 sur #23-03',
			floor: 'apto 1304',
			neighbourhood: 'El poblado',
			nameRecipient: 'Cristina Arango Escobar',
		},
		{
			state: 'Antioquia',
			city: 'Medellín',
			street: 'Calle 7 sur #23-03',
			floor: 'apto 1304',
			neighbourhood: 'El poblado',
			nameRecipient: 'Cristina Arango Escobar',
		},
	];

	console.log('hola' + addreses);
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
					</div>
					<div className="shadow-lg px-8 py-5 mt-5 border border-gray-200 rounded-lg">
						<div>
							<h2 className="text-lg text-gray-400">02</h2>
							<h2 className="text-2xl font-semibold">Entrega</h2>
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
												value={`address${index}`}
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
							<input
								type="submit"
								className="btn btn-dark mt-4"
								value="register"
							/>
						</div>
					</div>
					<div className="shadow-lg px-8 py-5 mt-5 border border-gray-200 rounded-lg">
						<div>
							<h2 className="text-lg text-gray-400">03</h2>
							<h2 className="text-2xl font-semibold">Método de pago</h2>
							{errors.paymentMethod?.type === 'required' ? (
								<p className="text-base mt-3 text-red-500">
									Selecciona por favor el método que deseas usar para realizar
									el pago.
								</p>
							) : (
								<p className="text-base mt-3">
									Selecciona por favor el método que deseas usar para realizar
									el pago.
								</p>
							)}
							<div className="grid grid-cols-3 gap-x-4">
								<div className="form-check mt-3 border-2 border-gray-200 rounded-md py-2 px-3 ">
									<label htmlFor="Tarjetas de crédito/débito">
										<input
											{...register('paymentMethod', { required: true })}
											type="radio"
											value="Tarjetas de crédito/débito"
											className="form-check-input"
											id="Tarjetas de crédito/débito"
										/>{' '}
										Tarjetas de crédito/débito
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
									<label htmlFor="Botón Bancolombia">
										<input
											{...register('paymentMethod', { required: true })}
											type="radio"
											value="Botón Bancolombiaa"
											className="form-check-input"
											id="Botón Bancolombia"
										/>{' '}
										Botón Bancolombia
									</label>
								</div>
							</div>
							<input
								type="submit"
								className="btn btn-dark mt-4"
								value="register"
							/>
						</div>
					</div>
				</div>
				<div className="basis-1/3 rounded-lg bg-white shadow-lg px-8 py-5 items-center border border-gray-200 h-fit">
					<h2 className="text-2xl font-semibold">Resumen de la compra</h2>
					<div>
						{productsCartProp.map((prod, index) => (
							<CheckoutProductItem prod={prod} />
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
					<button className="bg-medium-violet px-2 py-1 rounded-md font-semibold text-tiffany-green my-3 w-full border-2 border-medium-violet">
						<Link href="/Marketplace/Cart">Finalizar la compra</Link>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Checkout;
