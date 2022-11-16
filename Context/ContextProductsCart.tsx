import { Props } from 'next/script';
import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from 'react';
import { Item, ItemInCart } from '../types';

interface CartContextProps {
	productsCartProp: ItemInCart[];
	addItemProp: (item: Item, quantity: number) => void;
	removeItemProp: (idItem: string) => void;
	clearProp: () => void;
	isInCartProp: (idItem: string) => boolean;
	finalQuantityProp: number;
	setFinalQuantityProp: Dispatch<SetStateAction<number>>;
	totalCostProp: number;
}

export const CartContext = React.createContext<CartContextProps>({
	productsCartProp: [],
	addItemProp: () => {},
	removeItemProp: () => {},
	clearProp: () => {},
	isInCartProp: () => false,
	finalQuantityProp: 0,
	setFinalQuantityProp: () => {},
	totalCostProp: 0,
});

function ContextProductsCart({ children }: Props) {
	const [finalQuantity, setFinalQuantity] = useState(0);
	const [productsCart, setProductsCart] = useState<ItemInCart[]>([]);

	const [totalCost, setTotalCost] = useState(0);

	//Funcion de agregar, item, cantidad
	function addItem(item: Item, cantidad: number): void {
		if (isInCart(item._id)) {
			productsCart.forEach((prod: ItemInCart) => {
				if (prod._id === item._id) {
					// if (prod.cantidad + cantidad > prod.stock) {
					// 	alert(
					// 		'La cantidad que ingresaste es mayor a la cantidad que hay en inventario, se agrego al carrito solo la cantidad disponible del producto.'
					// 	);
					// 	setFinalQuantity(finalQuantity - prod.cantidad + prod.stock);
					// 	setTotalCost(
					// 		totalCost - prod.cantidad * prod.precio + prod.stock * prod.precio
					// 	);
					// 	prod.cantidad = prod.stock;
					// 	prod.total = prod.cantidad * prod.precio;
					// } else {
					// 	prod.cantidad += cantidad;
					// 	setFinalQuantity(finalQuantity + cantidad);
					// 	prod.total += item.precio * cantidad;
					// 	setTotalCost(totalCost + item.precio * cantidad);
					// }
					prod.quantity += cantidad;
					setFinalQuantity(finalQuantity + cantidad);
					prod.total += item.price * cantidad;
					setTotalCost(totalCost + item.price * cantidad);
				}
			});
		} else {
			let newItem: ItemInCart = {
				_id: item._id,
				description: item.description,
				image: item.image,
				name: item.name,
				price: item.price,
				quantity: cantidad,
				total: item.price * cantidad,
				idBusiness: item.idBusiness,
			};
			setProductsCart([...productsCart, newItem]);
			setFinalQuantity(finalQuantity + cantidad);
			setTotalCost(totalCost + item.price * cantidad);
		}
		// setCantFinal(cantFinal + cantidad);
	}

	//funcion de remover un item del carrito, id
	function removeItem(idItem: string) {
		let prodEliminar: ItemInCart | undefined = productsCart.find(
			(prod: ItemInCart) => prod._id === idItem
		);
		if (prodEliminar == undefined) {
			alert('el producto no se pudo eliminar');
		} else {
			setFinalQuantity(finalQuantity - prodEliminar.quantity);
			setProductsCart(productsCart.filter((prod) => prod._id !== idItem));
			setTotalCost(totalCost - prodEliminar.total);
		}
	}

	//funcion de vaciar el arreglo del carrito de los productos
	function clear(): void {
		setFinalQuantity(0);
		setProductsCart([]);
		setTotalCost(0);
	}

	//funcion de ver si un producto ya esta en el carrito o no, id, retorne true false
	function isInCart(idItem: string): boolean {
		return productsCart.find((prod: ItemInCart) => prod._id === idItem)
			? true
			: false;
	}

	return (
		<CartContext.Provider
			value={{
				productsCartProp: productsCart,
				addItemProp: addItem,
				removeItemProp: removeItem,
				clearProp: clear,
				isInCartProp: isInCart,
				finalQuantityProp: finalQuantity,
				setFinalQuantityProp: setFinalQuantity,
				totalCostProp: totalCost,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default ContextProductsCart;
