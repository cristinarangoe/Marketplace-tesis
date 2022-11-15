import React from "react";
import CarouselItem from "./CarouselItem";
import CircleNavigation from "./CircleNavigation";

function PrincipalCarousel() {
    let carouselItem: Object[] = [
        {
          image: "/moda.jpg",
          heading1: "Moda",
          heading2: "Ropa elaborada en Colombia, para que luzcas tus mejores looks y estés siempre a la moda",
        },
        {
          image: "/Alimentos.png",
          heading1: "Alimentos",
          heading2:
            "Las mejores opciones de alimentos, para que tengas opciones favorables y deliciosas",
        },
        {
          image: "/Hogar.webp",
          heading1: "Hogar",
          heading2: "Productos para que decores tu casa al mejor estilo ",
        },
        {
          image: "/Mascotas.jpg",
          heading1: "Productos para mascotas",
          heading2:
            "Los mejores productos para tu mejor compañia, para que los pongas super lindos",
        },
      ];
  return (
    <div className="h-auto py-5 flex border shadow-lg">
      <div className="ml-5 my-auto">
        <CircleNavigation href="#item0" />
        <CircleNavigation href="#item1" />
        <CircleNavigation href="#item2" />
        <CircleNavigation href="#item3" />
      </div>
      <div className="carousel w-full mx-5">
        {carouselItem.map((item, index) => (
          <CarouselItem item={item} id={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PrincipalCarousel;
