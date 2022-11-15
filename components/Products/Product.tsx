import Link from "next/link";
import React from "react";
import AddProductCartButton from "../Cart/AddProductCartButton";
import { useCartContext } from "../../Context/Index";
import { Item } from "../../types";
import Image from "next/image";

//this is the product that is in the general product's page container
const Product = ({ product }: { product: Item }) => {
  const { addItemProp } = useCartContext();
  return (
    <div
      key={product.id}
      className="flex flex-col w-64 px-6 my-4 py-5 shadow-lg rounded-lg bg-white z-0 border border-gray-200"
    >
      <div className="relative h-[10rem] w-auto ">
        <Link href={`/Marketplace/Product/${product.id}`}>
          <Image
            src={product.imagen}
            alt={product.nombre}
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="flex flex-col h-1/2">
        <div className="basis-1/2">
          <h3 className="text-2xl my-4 font-semibold">
            <Link href={`/Marketplace/Product/${product.id}`}>
              {product.nombre}
            </Link>
          </h3>
        </div>
        <div
          key={`downPart${product.id}`}
          className="flex justify-between basis-1/2"
        >
          <h4 className="text-lg">${product.precio}</h4>
          <AddProductCartButton
            onPress={() => addItemProp(product, 1)}
          ></AddProductCartButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
