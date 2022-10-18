import Link from "next/link";
import React from "react";
import CartItem from "../components/Cart/CartItem";
import Navbar from "../components/Navbar";
import { useGlobalContext } from '../Context/Index'



function Cart() {

  const {productsCartProp, clearProp, totalCostProp} = useGlobalContext();

    // let productosCarrito : object[] =[ {
    //     id: "001",
    //     nombre: "Plato mexicano",
    //     precio: 12000,
    //     descripcion: "plato con deliciosos ingredientes",
    //     imagen: "/public/Logo.png",
    //     categoria: "Mexicano",
    //     stock: 5,
    //   },
    //   {
    //     id: "002",
    //     nombre: "Nachos",
    //     precio: 10000,
    //     descripcion: "plato con deliciosos ingredientes",
    //     imagen: "/public/Logo.png",
    //     categoria: "Mexicano",
    //     stock: 5,
    //   }
    // ]

  return (
    <div>
      <Navbar/>
      <div className="flex flex-row mx-16 shadow-lg rounded-lg mt-3">
        <div className="flex flex-col basis-4/6 divide-y-2 divide-slate-300 mx-10">
          <div className="flex flex-row items-center justify-center text-2xl mt-5">
            <div className="flex justify-center basis-2/6">
              <h2>Producto</h2>
            </div>
            <div className="flex justify-center basis-1/6">
              <h2>Cantidad</h2>
            </div>
            <div className="flex justify-center basis-1/6">
              <h2>Precio</h2>
            </div>
            <div className="flex justify-center basis-1/6">
              <h2>Total</h2>
            </div>
            <div className="flex justify-center basis-1/6">
              <p></p>
            </div>
          </div>

          <div className="">
            {productsCartProp.map((prod) => (
              <CartItem producto={prod}/>
            ))}
          </div>
        </div>
        <div className="rounded-r-lg bg-cyan-500 basis-2/6">
          <div className="flex flex-col basis-2/6  divide-y divide-slate-300 mx-10">
            <div className="flex flex-col items-center justify-center text-2xl text-white mt-5">
              <h2>Resumen</h2>
            </div>
            <div className="flex flex-col text-white text-xl">
              <div className="flex mx-20 justify-between my-5">
                <h2>Subtotal</h2>
                <h2>${totalCostProp}</h2>
              </div>
              <div className="flex mx-20 justify-between my-5">
                <h2>Envio</h2>
                <h2>$4000</h2>
              </div>
            </div>
            <div className="text-white text-xl">
              <div className="flex mx-20 justify-between my-5">
                <h2>Subtotal</h2>
                <h2>$ {4000 +totalCostProp}</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Link
              href='/'
              className="bg-white p-2 rounded text-hidia-blue mx-5 my-3 w-6/12"
            >
              Continuar con el pago
            </Link>
            <button
              onClick={() => clearProp()}
              className="bg-white p-2 rounded text-hidia-blue mx-5 w-6/12 my-3"
            >
              Vaciar el carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
