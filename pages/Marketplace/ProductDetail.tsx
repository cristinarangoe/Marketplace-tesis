import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AddProductCartButton from "../../components/Cart/AddProductCartButton";
import Navbar from "../../components/Navbar-Navigation/Navbar";
import ProductToCart from "../../components/Products/ProductToCart";
import { Item } from "../../types";

function ProductDetail() {

  const router = useRouter();
  const {product} = router.query;

  console.log(product)

  let producto: Item = {
    id: "001",
    nombre: "Plato mexicano",
    precio: 12000,
    descripcion: "plato con deliciosos ingredientes",
    imagen: "/Logo.png",
    categoria: "Mexicano",
    stock: 100,
  };

  let products: Item[] = [
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

  // let filterProduct : Item | undefined = products.filter((prod) => prod.id !== product.id)

  // productsCart.filter((prod) => prod.id !== idItem)

  return (
    <div>
      <Navbar />
      <div key={producto.id} className="flex flex-row mx-10 mt-5">
        <div className="basis-1/2 grid justify-items-center ">
          <Image
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
