import React from "react";
import Navbar from "../../components/Navbar";
import Product from "../../components/Products/Product";

const ProductsContainer = () => {
  let products: object[] = [
    {
      id: "001",
      nombre: "Plato mexicano",
      precio: 12000,
      descripcion: "plato con deliciosos ingredientes",
      imagen: "/public/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
    {
      id: "002",
      nombre: "Nachos",
      precio: 10000,
      descripcion: "plato con deliciosos ingredientes",
      imagen: "/public/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
    {
      id: "003",
      nombre: "Arepa blanca pequeña",
      precio: 15000,
      descripcion: "arepa hecha con maiz 100% colombiano",
      imagen: "/public/Logo.png",
      categoria: "Arepas",
      stock: 5,
    },
    {
      id: "004",
      nombre: "Arepa blanca grande",
      precio: 8000,
      descripcion: "arepa version grande blanca",
      imagen: "/public/Logo.png",
      categoria: "Arepas",
      stock: 5,
    },
    {
      id: "005",
      nombre: "Arepa de queso",
      precio: 11000,
      descripcion: "Queso mozzarella 100% natural",
      imagen: "/public/Logo.png",
      categoria: "Arepas",
      stock: 5,
    },
    {
      id: "006",
      nombre: "Chorizo de cerdo",
      precio: 20000,
      descripcion: "Hecho con ingredientes de la mejor calidad",
      imagen: "/public/Logo.png",
      categoria: "Cárnicos",
      stock: 5,
    },
    {
      id: "007",
      nombre: "Carne de hamburguesa",
      precio: 22000,
      descripcion: "Carne de res",
      imagen: "/public/Logo.png",
      categoria: "Cárnicos",
      stock: 5,
    },
    {
      id: "008",
      nombre: "Guacamole",
      precio: 15000,
      descripcion: "Hecho sin conservantes",
      imagen: "/public/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
    {
      id: "009",
      nombre: "Salsa de pimentón",
      precio: 15000,
      descripcion: "Pimenton",
      imagen: "/public/Logo.png",
      categoria: "Mexicano",
      stock: 5,
    },
  ];

  return (
    <div>
        <Navbar/>
      <div className="grid  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
        {products.map((prod) => (
          <Product product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
