import React from "react";
import Navbar from "../../components/Navbar-Navigation/Navbar";
import Product from "../../components/Products/Product";
import { Item } from "../../types";

const ProductsContainer = () => {
  let products: Item[] = [
    {
      id: "001",
      nombre: "Plato mexicano",
      precio: 12000,
      descripcion: "Plato mexicano realizado con los mejores ingredientes. En el podrás encontrar 8 tipos de ingredientes, que al juntarlos, encontrarás la mejor combinación de sabores",
      imagen: "/platoMexicano.png",
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
    <div className=" min-h-screen">
        <Navbar/>
      <div className="grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-10">
        {products.map((prod, index) => (
          <Product product={prod} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
