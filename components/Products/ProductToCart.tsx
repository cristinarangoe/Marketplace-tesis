import React, { useState } from 'react';
import ProductCount from './ProductCount';
import * as Toast from '@radix-ui/react-toast';
import { useCartContext } from '../../Context/Index';
import { Item, ItemInCart } from '../../types';

function ProductToCart({
	producto,
	initial,
}: {
	producto: Item;
	initial: number;
}) {
	const [cantParcial, setCantParcial] = useState(initial);
	const [open, setOpen] = useState(false);

	const { addItemProp } = useCartContext();

	function adding() {
		// if (cantParcial < producto.stock) {
		setCantParcial(cantParcial + 1);
		// }
	}
	function subs() {
		if (cantParcial > 1) {
			setCantParcial(cantParcial - 1);
		}
	}

	return (
		<div className="mt-5">
			<div className="">
				<p className="font-medium text-xl pb-2 text-tiffany-green">Cantidad:</p>
				<ProductCount
					product={{
						_id: producto._id,
						name: producto.name,
						price: producto.price,
						description: producto.description,
						image: producto.image,
						quantity: 1,
						total: producto.price,
						idBusiness: producto.idBusiness,
					}}
					onPressAdd={adding}
					onPressSubs={subs}
					cantidad={cantParcial}
				/>
			</div>
			<Toast.Provider swipeDirection="right">
				<button
					className="bg-medium-violet w-full text-white py-2 rounded-lg text-xl font-semibold mt-5"
					onClick={() => {
						setOpen(false);
						addItemProp(producto, cantParcial);
						setOpen(true);
					}}
				>
					Añadir al carrito
				</button>
				<Toast.Root
					open={open}
					onOpenChange={setOpen}
					className="flex bg-white font-medium text-xl  shadow-lg p-5 items-center border-l-4 border-l-dazzle-rose"
				>
					<Toast.Title className="flex flex-row text-xl font-bold text-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="pink"
							className="w-6 h-6 stroke-dazzle-rose stroke-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span className="pl-3">Producto adicionado </span>
					</Toast.Title>
				</Toast.Root>

				<Toast.Viewport className="fixed bottom-0 right-0 flex flex-col padding-5 mb-5 mr-5" />
			</Toast.Provider>
		</div>
	);
}

export default ProductToCart;
