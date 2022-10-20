import Link from "next/link";
import React from "react";
import ProductItem from "../../components/CRUDProductsBusiness/ProductItem";
import { Item } from "../../types";

const CRUDProductBusiness = () => {
  let products: Item[] = [
    {
      id: "001",
      nombre: "Plato mexicano ",
      precio: 12000,
      descripcion: "plato con deliciosos ingredientes",
      imagen: "/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
    {
      id: "002",
      nombre: "Nachos",
      precio: 10000,
      descripcion: "plato con deliciosos ingredientes",
      imagen: "/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
    {
      id: "003",
      nombre: "Arepa blanca pequeña",
      precio: 15000,
      descripcion: "arepa hecha con maiz 100% colombiano",
      imagen: "/Logo.png",
      categoria: "Arepas",
      stock: 5,
    },
    {
      id: "004",
      nombre: "Arepa blanca grande",
      precio: 8000,
      descripcion: "arepa version grande blanca",
      imagen: "/Logo.png",
      categoria: "Arepas",
      stock: 5,
    },
    {
      id: "005",
      nombre: "Arepa de queso",
      precio: 11000,
      descripcion: "Queso mozzarella 100% natural",
      imagen: "/Logo.png",
      categoria: "Arepas",
      stock: 5,
    },
    {
      id: "006",
      nombre: "Chorizo de cerdo",
      precio: 20000,
      descripcion: "Hecho con ingredientes de la mejor calidad",
      imagen: "/Logo.png",
      categoria: "Cárnicos",
      stock: 5,
    },
    {
      id: "007",
      nombre: "Carne de hamburguesa",
      precio: 22000,
      descripcion: "Carne de res",
      imagen: "/Logo.png",
      categoria: "Cárnicos",
      stock: 5,
    },
    {
      id: "008",
      nombre: "Guacamole",
      precio: 15000,
      descripcion: "Hecho sin conservantes",
      imagen: "/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
    {
      id: "009",
      nombre: "Salsa de pimentón",
      precio: 15000,
      descripcion: "Pimenton",
      imagen: "/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
  ];

  return (
    <div className="mx-8 mt-5 ">
      <div className="flex flex-row justify-between">
        <div className="">
          <h1>Productos</h1>
        </div>
        <div className=" bg-purple-400">
          <Link href='/BusinessProducts/AddProductContainer'>
            Adicionar producto
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center border-b-2 border-b-gray-100">
        <div className="basis-1/5 mx-auto">
        </div>
        <div className="basis-1/5 mx-auto">
          <h3>Producto</h3>
        </div>
        <div className="basis-1/5">
          <h3>Inventario</h3>
        </div>
        <div className="basis-1/5">
          <h3>Precio</h3>
        </div>
        <div className="basis-1/5"></div>
      </div>
      <div>
        {products.map((product) => (
          <ProductItem producto={product} />
        ))}
      </div>
    </div>
  );
};

export default CRUDProductBusiness;
