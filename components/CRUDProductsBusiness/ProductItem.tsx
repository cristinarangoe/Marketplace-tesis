import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Item } from "../../types";

const ProductItem = ({producto} : any) => {

  return (
    <div className="flex flex-row items-center border-b-2 border-b-gray-100">
      <div className="basis-1/5">
        <Image src={producto.imagen} alt={producto.nombre} width={60} height={80}/>
      </div>
      <div className="basis-1/5 pr-2">
        <h3>{producto.nombre}</h3>
      </div>
      <div className="basis-1/5">
        <h3>{producto.stock}</h3>
      </div>
      <div className="basis-1/5">
        <h3>{producto.precio}</h3>
      </div>
      <div className="flex flex-row basis-1/5">
        <div className="basis-1/2">
          <Link href="/BusinessProducts/EditProductContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
        </div>
        <div className="basis-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
