import Image from "next/image";
import React from "react";
import { ItemInCart } from "../../types";

function CheckoutProductItem({ prod }: { prod: ItemInCart }) {
  return (
    <div className="flex flex-row items-center border-b border-b-gray-200 py-3">
      <div className="basis-1/4 mr-3 relative h-[5rem] w-auto">
        <Image
          src={prod.image}
          alt={prod.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="basis-2/4 mr-3">
        <h2>{prod.name}</h2>
        <h2>Cantidad: {prod.quantity}</h2>
      </div>
      <div className="basis-1/4">
        <h2>${prod.price}</h2>
      </div>
    </div>
  );
}

export default CheckoutProductItem;
