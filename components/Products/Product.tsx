import Link from "next/link";
import React from "react";
import AddProductCartButton from "../Cart/AddProductCartButton";
import { useGlobalContext } from '../../Context/Index'

const Product = ({ product }: any) => {
      const {addItemProp} = useGlobalContext();
  return (
    <div
      key={product.id}
      className="flex flex-col w-60 p-4 m-4  shadow-md rounded-lg"
    >
      <Link href='/'>
        <img className="px-2" src={product.imagen} alt={product.nombre} />
      </Link>
      <h3 className="text-2xl my-4">
        <Link href='/'>{product.nombre}</Link>
      </h3>
      <div key={`downPart${product.id}`} className="flex justify-between">
        <h4 className="text-lg">${product.precio}</h4>
        <AddProductCartButton onPress={() => addItemProp(product,1)}/>
      </div>
    </div>
  );
};

export default Product;
