import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

function CategoriesNavigationMenu() {
  let categories: string[] = [
    "Moda",
    "Mascotas",
    "Comida",
    "Hogar",
    "Variedades",
  ];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none flex items-center ">
        <h2>Categorias</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 stroke-2 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white rounded-md p-2 shadow-lg grid grid-col-2">
        {categories.map((cat, index) => (
          <DropdownMenu.Item
            className="pr-8 pl-3 py-0.5 outline-none hover:bg-medium-violet hover:text-white hover:rounded-md hover:ring-inset"
            key={index}
          >
            {cat}
          </DropdownMenu.Item>
        ))}

        <DropdownMenu.Arrow className="fill-medium-violet" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default CategoriesNavigationMenu;
