import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Order } from "../../types";


//This is the product that is in the orders view page container, each of the orders
function OrderItem({order}:{order:Order}) {
  return (
    <div className="flex flex-row items-center border-b-2 border-b-gray-100 py-3">
      <div className="basis-1/5">
        <Link href="/BusinessPage/SpecificOrderContainer">
          <h3 className="underline underline-offset-2 text-blue-500">{order.id}</h3>
        </Link>
      </div>
      <div className="basis-1/5 pr-2">
        <h3>{order.date.toISOString()}</h3>
      </div>
      <div className="basis-1/5">
        <h3>{order.client.name}</h3>
      </div>
      <div className="basis-1/5">
        <h3>{order.status}</h3>
      </div>
      <div className="flex flex-row basis-1/5">
        <h3>{order.totalPrice}</h3>
      </div>
    </div>
  );
}

export default OrderItem;
