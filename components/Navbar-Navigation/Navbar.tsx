import Link from "next/link";
import React from "react";
import Image from "next/image";
import DialogClientBusiness from "./DialogClientBusiness";
import { useGlobalContext } from "../../Context/Index";
import CategoriesNavigationMenu from "./CategoriesNavigationMenu";

const Navbar = () => {
  const { finalQuantityProp } = useGlobalContext();

  return (
    <div className="z-10">
      <div className="flex flex-row w-full py-5 border-b-2 border-b-gray-200 h-fit items-center">
        <div className="ml-5">
          <Link href="/Marketplace/Home">
            <Image src="/Logo.png" alt="logo" width={40} height={16} />
          </Link>
        </div>
        <div className="flex flex-row ml-5">
          <ul className="flex flex-row ">
            <li className="mr-5 text-black text-2xl font-medium  no-underline hover:underline  hover:decoration-cyan-300 ">
              <Link href="/Marketplace/ProductsContainer">Productos</Link>
            </li>
            <li className="mr-5 text-black text-2xl font-medium hover:urderline hover:uderline-offset-2 hover:decoration-medium-violet hover:decoration-2 z-40">
              <CategoriesNavigationMenu />
            </li>
            <li className="mr-5 text-black text-2xl font-medium hover:urderline  hover:decoration-medium-violet ">
              <Link href="/Marketplace/BusinessesPage">Emprendimientos</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row absolute right-0 mr-5">
          <ul className="flex flex-row ">
            <li className="mr-5 my-auto">
              <Link href="/Marketplace/UserProfile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
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
              <DialogClientBusiness />
            </li>
            <li className="flex relative">
              <Link href="/Marketplace/Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
              <div className="bg-tiffany-green absolute top-0 right-0 rounded-full px-1">
                <p className="text-md ">{finalQuantityProp}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
