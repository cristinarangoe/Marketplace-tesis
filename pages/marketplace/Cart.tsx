import Link from 'next/link';
import React from 'react';
import CartItem from '../../components/Cart/CartItem';
import Navbar from '../../components/Navbar-Navigation/Navbar';
import { useCartContext } from '../../Context/Index';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

function Cart() {
	const { productsCartProp, clearProp, totalCostProp } = useCartContext();
	const [open, setOpen] = React.useState(false);

	console.log(productsCartProp)

	if (productsCartProp.length === 0)
		return (
			<div>
				<Navbar />
				<div className="flex flex-col bg-white items-center mt-8">
					<h1 className="text-3xl font-bold px-10 pt-6 text-center text-medium-violet mb-5">
						Carrito de compras
					</h1>
					<h2 className="text-xl text-black font-medium">
						Su carrito se encuentra actualmente vacio
					</h2>
					<button className="bg-medium-violet text-tiffany-green py-2 px-5 rounded-lg text-xl font-semibold mt-5">
						<Link
							href="/marketplace/ProductsContainer"
							className=" p-2 rounded text-white mx-5 my-3 w-6/12"
						>
							Empezar a comprar
						</Link>
					</button>
				</div>
			</div>
		);
	return (
		<div className="h-full">
			<Navbar />
			<div className=" mx-16 rounded-lg mt-6 h-full mb-8">
				<h1 className="text-3xl font-bold px-10 pt-6 text-center text-black mb-5">
					Carrito de compras
				</h1>
				<div className="flex flex-row">
					<div className="rounded-lg bg-white flex flex-col basis-4/6 divide-y-2 divide-slate-300 mr-8 shadow-lg px-8 py-5 border border-gray-200">
						<div className="flex flex-row items-center justify-center text-xl font-semibold pb-2">
							<div className="flex justify-center basis-2/6">
								<h2>Producto</h2>
							</div>
							<div className="flex justify-center basis-1/6">
								<h2>Cantidad</h2>
							</div>
							<div className="flex justify-center basis-1/6">
								<h2>Precio</h2>
							</div>
							<div className="flex justify-center basis-1/6">
								<h2>Total</h2>
							</div>
							<div className="flex justify-center basis-1/6">
								<p></p>
							</div>
						</div>

						<div className="">
							{productsCartProp.map((prod, key) => (
								<CartItem key={key} producto={prod} />
							))}
						</div>
					</div>
					<div className="rounded-lg  basis-2/6 bg-white shadow-lg px-8 py-5 h-fit border border-gray-200">
						<div className="flex flex-col basis-2/6  divide-y divide-black">
							<div className="flex flex-col items-center justify-center text-xl text-black  font-semibold pb-2">
								<h2>Resumen</h2>
							</div>
							<div className="flex flex-col text-black text-xl">
								<div className="flex mx-20 justify-between my-5">
									<h2>Subtotal</h2>
									<h2>${totalCostProp}</h2>
								</div>
								<div className="flex mx-20 justify-between my-5">
									<h2>Envio</h2>
									<h2>$4000</h2>
								</div>
							</div>
							<div className="text-black text-xl">
								<div className="flex mx-20 justify-between my-5">
									<h2>Total</h2>
									<h2>$ {4000 + totalCostProp}</h2>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center mx-5 w-full">
							<button className="bg-tiffany-green px-2 py-3 rounded-md font-semibold text-white my-3 w-4/5">
								<Link href="/marketplace/Checkout">
									Continuar con la compra
								</Link>
							</button>
							<div className="bg-tiffany-green px-2 py-3 rounded-md font-semibold text-white my-3 w-4/5 text-center">
								<AlertDialog.Root open={open} onOpenChange={setOpen}>
									<AlertDialog.Trigger>
										Vaciar el carrito
										<AlertDialog.Overlay>
											<div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
											<AlertDialog.Content className="bg-white rounded-md shadow-lg fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-2/6 p-5">
												<AlertDialog.Title className="text-xl font-medium mt-3">
													Estás seguro que deseas vaciar tu carrito?
												</AlertDialog.Title>
												<div className="my-3 ">
													<AlertDialog.Cancel>
														<button
															className="bg-medium-violet text-white px-5 py-2 rounded-md  border-2 border-medium-violet mr-5"
															onClick={() => setOpen(false)}
														>
															Cancelar
														</button>
													</AlertDialog.Cancel>
													<AlertDialog.Action>
														<button
															className="bg-red-500 text-white px-5 py-2 rounded-md border-2 border-red-500"
															onClick={() => clearProp()}
														>
															Si, vaciar
														</button>
													</AlertDialog.Action>
												</div>
											</AlertDialog.Content>
										</AlertDialog.Overlay>
									</AlertDialog.Trigger>
								</AlertDialog.Root>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
