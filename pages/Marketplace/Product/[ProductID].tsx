import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import AddProductCartButton from "../../../components/Cart/AddProductCartButton";
import Navbar from "../../../components/Navbar-Navigation/Navbar";
import ProductToCart from "../../../components/Products/ProductToCart";
import { CLIENT_URL } from "../../../lib/client";
import fetcher from "../../../lib/utils";
import { userSignal } from "../../../signals/userSignal";
import { Item, Order } from "../../../types";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.ProductID;

  // let products: Item[] = [
  // 	{
  // 		id: '001',
  // 		nombre: 'Plato mexicano',
  // 		precio: 12000,
  // 		descripcion: "Plato mexicano realizado con los mejores ingredientes. En el podrás encontrar 8 tipos de ingredientes, que al juntarlos, encontrarás la mejor combinación de sabores",
  // 		imagen: '/platoMexicano.png',
  // 		categoria: 'Mexicano',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '002',
  // 		nombre: 'Nachos',
  // 		precio: 10000,
  // 		descripcion: 'plato con deliciosos ingredientes',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Mexicano',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '003',
  // 		nombre: 'Arepa blanca pequeña',
  // 		precio: 15000,
  // 		descripcion: 'arepa hecha con maiz 100% colombiano',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Arepas',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '004',
  // 		nombre: 'Arepa blanca grande',
  // 		precio: 8000,
  // 		descripcion: 'arepa version grande blanca',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Arepas',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '005',
  // 		nombre: 'Arepa de queso',
  // 		precio: 11000,
  // 		descripcion: 'Queso mozzarella 100% natural',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Arepas',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '006',
  // 		nombre: 'Chorizo de cerdo',
  // 		precio: 20000,
  // 		descripcion: 'Hecho con ingredientes de la mejor calidad',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Cárnicos',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '007',
  // 		nombre: 'Carne de hamburguesa',
  // 		precio: 22000,
  // 		descripcion: 'Carne de res',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Cárnicos',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '008',
  // 		nombre: 'Guacamole',
  // 		precio: 15000,
  // 		descripcion: 'Hecho sin conservantes',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Mexicano',
  // 		stock: 5,
  // 	},
  // 	{
  // 		id: '009',
  // 		nombre: 'Salsa de pimentón',
  // 		precio: 15000,
  // 		descripcion: 'Pimenton',
  // 		imagen: '/Logo.png',
  // 		categoria: 'Mexicano',
  // 		stock: 5,
  // 	},
  // ];

  // let producto: Item | undefined = products.find(
  // 	(prod) => prod.id === productId
  // );
  // if (producto === undefined) {
  // 	return <h2>Producto no encontrado</h2>;
  // }

  const { data, error } = useSWR<Item, Error>(
    `${CLIENT_URL}/product/${productId}`,
    fetcher
  );

  if (error)
    return (
      <div>
        <p>error</p>
      </div>
    );

  if (!data) return <p>loading</p>;

  let producto: Item | undefined = data;

  if (producto === undefined) {
    return <h2>Producto no encontrado</h2>;
  }
  return (
    <div>
      <Navbar />
      <div key={producto._id} className="flex flex-row mx-16 mt-8">
        <div className="basis-1/2 grid justify-items-center relative h-[30rem] w-auto">
          <Image
            className="w-3/4"
            src={producto.image}
            alt={producto.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="basis-1/2 mx-10">
          <h1 className="text-4xl font-bold text-tiffany-green">
            {producto.name}
          </h1>
          <p className="text-2xl my-4 font-normal">{producto.description}</p>
          <p className="text-2xl font-semibold ">${producto.price}</p>
          <ProductToCart producto={producto} initial={1} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
