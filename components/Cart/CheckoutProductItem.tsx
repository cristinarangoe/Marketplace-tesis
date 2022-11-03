import React from "react";
import { ItemInCart } from "../../types";

function CheckoutProductItem({ prod }: { prod: ItemInCart }) {
  return (
    <div className="flex flex-row items-center border-b border-b-gray-200 py-3">
      <div className="basis-1/4 mr-3">
        <img src={prod.imagen} />
      </div>
      <div className="basis-2/4 mr-3">
        <h2>{prod.nombre}</h2>
        <h2>Cantidad: {prod.cantidad}</h2>
        <h2>Aca irian las caracteristicas</h2>
      </div>
      <div className="basis-1/4">
        <h2>${prod.precio}</h2>
      </div>
    </div>
  );
}

export default CheckoutProductItem;
