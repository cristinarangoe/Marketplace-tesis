import Link from "next/link";
import React from "react";
import Image from 'next/image'
import DialogClientBusiness from "./DialogClientBusiness";
import { useGlobalContext } from '../../Context/Index'

const Navbar = () => {

  const {finalQuantityProp} = useGlobalContext();

  return (
    <div className="">
      <div className="flex flex-row w-full py-3 bg-cyan-300">
        <div className="ml-5">
          <Link href='/Marketplace/Home'><Image src="/Logo.png" alt="logo" width={40} height={16} /></Link>
        
        </div>
        <div className="flex flex-row ml-5">
          <ul className="flex flex-row ">
            <li  className="mr-5 text-black text-xl font-medium hover:text-yellow-500">
              <Link href="/Marketplace/ProductsContainer" >Productos</Link>
            </li>
            <li className="mr-5 text-black text-xl font-medium hover:text-yellow-500">
              <Link href="/">Opcion 2</Link>
            </li>
            <li className="mr-5 text-black text-xl font-medium hover:text-yellow-500">
              <Link href="/">Opcion 3</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row absolute right-0 mr-5">
          <ul className="flex flex-row ">
            <li className="mr-5 my-auto">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Link>
            </li>
            <li className="mr-5">
                <DialogClientBusiness/>
            </li>
            <li className="flex">
              <Link href="/Marketplace/Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
              ({finalQuantityProp})
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
