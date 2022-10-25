import Image from "next/image";
import React from "react";

function ProductInOrderItem({ prod }: any) {
  return (
    <div className="flex flex-row py-5 border-b-2 border-b-gray-300">
      <div className="basis-2/5 mx-auto flex flex-row">
        <div className="basis-1/2">
            <Image src={prod.image} width='100%' height='40'alt={prod.name}/>
        </div>
        <div className="basis-1/2">
            <h4>{prod.name}</h4>
            <h4>ID: {prod.id}</h4>
        </div>
      </div>
      <div className="basis-1/5 mx-auto">
        <h3>{prod.price}</h3>
      </div>
      <div className="basis-1/5">
        <h3>{prod.quantity}</h3>
      </div>
      <div className="basis-1/5">
        <h3>{prod.price * prod.quantity}</h3>
      </div>
    </div>
  );
}

export default ProductInOrderItem;
