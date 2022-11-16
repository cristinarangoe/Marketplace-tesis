import React, { useState } from 'react';
import { useCartContext } from '../../Context/Index';
import { ItemInCart } from '../../types';
import ProductCount from '../Products/ProductCount';
import * as Toast from '@radix-ui/react-toast';
import Image from 'next/image';

interface ProductProps {
	producto: ItemInCart;
}

const CartItem: React.FC<ProductProps> = ({ producto }) => {
	const { removeItemProp, addItemProp } = useCartContext();
	const [open, setOpen] = useState(false);

	function adding(producto: ItemInCart) {
		// if (producto.cantidad < producto.stock) {
			addItemProp(producto, 1);
		// }
	}

	function subs(producto: ItemInCart) {
		if (producto.quantity > 1) {
			addItemProp(producto, -1);
		} else if (producto.quantity === 1) {
			removeItemProp(producto._id);
		}
	}

	return (
		<div className="flex flex-row items-center border-b py-5">
			<div className="flex flex-row items-center basis-2/6">
				<div className="basis-1/2 relative h-[10rem] w-auto">
					<Image
						src={producto.image}
						className="w-32 lg:w-40 lg:pr-2"
						alt={producto.name}
						layout='fill'
						objectFit="contain"
					/>
				</div>
				<div className="basis-1/2 pl-3 ">
					<h2 className="text-xl">{producto.name}</h2>
				</div>
			</div>
			<div className="flex justify-center basis-1/6">
				<ProductCount
					product={producto}
					onPressAdd={() => adding(producto)}
					onPressSubs={() => subs(producto)}
					cantidad={producto.quantity}
				/>
			</div>
			<div className="flex justify-center basis-1/6">
				<h2 className="text-lg">${producto.price}</h2>
			</div>
			<div className="flex justify-center basis-1/6">
				<h2 className="text-lg">${producto.total}</h2>
			</div>
			<div className="flex justify-center basis-1/6">
				<Toast.Provider swipeDirection="right">
					<button
						className=""
						onClick={() => {
							setOpen(false);
							removeItemProp(producto._id);
							setOpen(true);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="red"
							className="w-6 h-6 stroke-red-500 stroke-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
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
							<span className="pl-3">Producto eliminado del carrito</span>
						</Toast.Title>
					</Toast.Root>

					<Toast.Viewport className="fixed bottom-0 right-0 flex flex-col padding-5 mb-5 mr-5" />
				</Toast.Provider>
			</div>
		</div>
	);
};

export default CartItem;
