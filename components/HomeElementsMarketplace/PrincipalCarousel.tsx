import React from "react";
import CarouselItem from "./CarouselItem";
import CircleNavigation from "./CircleNavigation";

function PrincipalCarousel() {
    let carouselItem: Object[] = [
        {
          image: "/Logo.png",
          heading1: "Compra ropa lista para tu casa",
          heading2: "ropa super lida para que te pongas todos los dias en la u",
        },
        {
          image: "/Logo.png",
          heading1: "Compra comida lista para tu casa",
          heading2:
            "Estara hecho para que disfrutes en casa siempre y siempre, calientala y listo",
        },
        {
          image: "/Logo.png",
          heading1: "Compra zapatos lista para tu casa",
          heading2: "zapatos que son demasiado comodos como la nube",
        },
        {
          image: "/Logo.png",
          heading1: "Compra productos para mascotas lista para tu casa",
          heading2:
            "los mejores productos para tu mascota, para que los alimentes y los pongas lindos",
        },
      ];
  return (
    <div className="bg-cyan-400 h-auto py-5 flex">
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
