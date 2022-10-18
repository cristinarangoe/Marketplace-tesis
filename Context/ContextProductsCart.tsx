import { Props } from "next/script";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Item, ItemInCart } from "../types";

interface GlobalContextProps {
  productsCartProp: ItemInCart[];
  addItemProp: (item: Item, quantity: any) => void;
  removeItemProp: (idItem: any) => void;
  clearProp: () => void;
  isInCartProp: (idItem: any) => boolean;
  finalQuantityProp: number;
  setFinalQuantityProp: Dispatch<SetStateAction<number>>;
  totalCostProp: number;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  productsCartProp: [],
  addItemProp: () => {},
  removeItemProp: () => {},
  clearProp: () => {},
  isInCartProp: () => false,
  finalQuantityProp: 0,
  setFinalQuantityProp: () => {},
  totalCostProp: 0,
});

function ContextProductsCart({ children } : Props) {
  const [finalQuantity, setFinalQuantity] = useState(0);
  const [productsCart, setProductsCart] = useState<ItemInCart[]>([]);

  const [totalCost, setTotalCost] = useState(0);

  //Funcion de agregar, item, cantidad
  function addItem(item: Item, cantidad: number): void {
    if (isInCart(item.id)) {
      productsCart.forEach((prod: ItemInCart) => {
        if (prod.id === item.id) {
          if (prod.cantidad + cantidad > prod.stock) {
            alert(
              "La cantidad que ingresaste es mayor a la cantidad que hay en inventario, se agrego al carrito solo la cantidad disponible del producto."
            );
            setFinalQuantity(finalQuantity - prod.cantidad + prod.stock);
            setTotalCost(
              totalCost - prod.cantidad * prod.precio + prod.stock * prod.precio
            );
            prod.cantidad = prod.stock;
            prod.total = prod.cantidad * prod.precio;
          } else {
            prod.cantidad += cantidad;
            setFinalQuantity(finalQuantity + cantidad);
            prod.total += item.precio * cantidad;
            setTotalCost(totalCost + item.precio * cantidad);
          }
        }
      });
    } else {
      let newItem = {
        ...item,
        cantidad: cantidad,
        total: item.precio * cantidad,
      };
      setProductsCart([...productsCart, newItem]);
      setFinalQuantity(finalQuantity + cantidad);
      setTotalCost(totalCost + item.precio * cantidad);
    }
    // setCantFinal(cantFinal + cantidad);
  }

  //funcion de remover un item del carrito, id
  function removeItem(idItem: any) {
    let prodEliminar: any = productsCart.find(
      (prod: ItemInCart) => prod.id === idItem
    );
    setFinalQuantity(finalQuantity - prodEliminar.cantidad);
    setProductsCart(productsCart.filter((prod) => prod.id !== idItem));
    setTotalCost(totalCost - prodEliminar.total);
  }

  //funcion de vaciar el arreglo del carrito de los productos
  function clear(): void {
    setFinalQuantity(0);
    setProductsCart([]);
    setTotalCost(0);
  }

  //funcion de ver si un producto ya esta en el carrito o no, id, retorne true false
  function isInCart(idItem: any): boolean {
    return productsCart.find((prod: ItemInCart) => prod.id === idItem)
      ? true
      : false;
  }

  return (
    <GlobalContext.Provider
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
    </GlobalContext.Provider>
  );
}

export default ContextProductsCart;
