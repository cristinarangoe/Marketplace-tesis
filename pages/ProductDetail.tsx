import React from "react";
import AddProductCartButton from "../components/Cart/AddProductCartButton";
import Navbar from "../components/Navbar";
import ProductToCart from "../components/Products/ProductToCart";
import { Item } from "../types";

function ProductDetail() {
  let producto: Item = {
    id: "001",
    nombre: "Plato mexicano",
    precio: 12000,
    descripcion: "plato con deliciosos ingredientes",
    imagen: "/public/Logo.png",
    categoria: "Mexicano",
    stock: 100,
  };

  return (
    <div>
      <Navbar />
      <div key={producto.id} className="flex flex-row mx-10 mt-5">
        <div className="basis-1/2 grid justify-items-center ">
          <img
            className="max-h-96"
            src={producto.imagen}
            alt={producto.nombre}
          />
        </div>
        <div className="basis-1/2 mx-10">
          <h1 className="text-5xl text-center text-hidia-yellow">
            {producto.nombre}
          </h1>
          <p className="text-xl my-4">{producto.descripcion}</p>
          <div className="flex flex-row justify-center items-center">
            <p className="text-xl mr-16 ">${producto.precio}</p>
            {/* <ItemBuy initial={1} producto={producto} /> */}
          </div>
        </div>
        <ProductToCart producto={producto} initial={1}/>
      </div>
      
    </div>
  );
}

export default ProductDetail;
