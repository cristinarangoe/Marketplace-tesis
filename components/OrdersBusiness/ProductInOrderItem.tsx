import Image from "next/image";
import React from "react";
import { ItemInCart } from "../../types";

//this is the product that is in the specific order page, each of the products that is in the client's order
function ProductInOrderItem({ prod }: { prod: ItemInCart }) {
  return (
    <div className="flex flex-row py-5 border-b-2 border-b-gray-300">
      <div className="basis-3/6 mx-auto flex flex-row">
        <div className="basis-1/3 relative h-[5rem] w-auto ">
          <Image
            src={prod.image}
            layout="fill"
            objectFit="contain"
            alt={prod.name}
          />
        </div>
        <div className="basis-2/3 ml-3 ">
          <h4>{prod.name}</h4>
          <h4>ID: {prod._id}</h4>
        </div>
      </div>
      <div className="basis-1/6 mx-auto">
        <h3>${prod.price}</h3>
      </div>
      <div className="basis-1/6">
        <h3>{prod.quantity}</h3>
      </div>
      <div className="basis-1/6">
        <h3>${prod.price * prod.quantity}</h3>
      </div>
    </div>
  );
}

export default ProductInOrderItem;
