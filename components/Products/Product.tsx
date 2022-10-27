import Link from "next/link";
import React from "react";
import AddProductCartButton from "../Cart/AddProductCartButton";
import { useGlobalContext } from '../../Context/Index'
import { Item } from "../../types";
import Image from "next/image";

//this is the product that is in the general product's page container
const Product = ({ product }: {product : Item}) => {
      const {addItemProp} = useGlobalContext();
  return (
    <div
      key={product.id}
      className="flex flex-col w-60 p-4 m-4  shadow-md rounded-lg"
    >
      <Link href={`/Marketplace/ProductDetail/${product.id}`}>
        <Image className="px-2 h-16 w-16" src={product.imagen} alt={product.nombre} height='50' width='40'/>
      </Link>
      <h3 className="text-2xl my-4">
        <Link href={`/Marketplace/ProductDetail/${product.id}`}>{product.nombre}</Link>
      </h3>
      <div key={`downPart${product.id}`} className="flex justify-between">
        <h4 className="text-lg">${product.precio}</h4>
        <AddProductCartButton onPress={() => addItemProp(product,1)}></AddProductCartButton>
      </div>
    </div>
  );
};

export default Product;
