import React from "react";
import CarouselItem from "../../components/HomeElementsMarketplace/CarouselItem";
import CategorieItem from "../../components/HomeElementsMarketplace/CategorieItem";
import CategoriesCarousel from "../../components/HomeElementsMarketplace/CategoriesCarousel";
import CircleNavigation from "../../components/HomeElementsMarketplace/CircleNavigation";
import PrincipalCarousel from "../../components/HomeElementsMarketplace/PrincipalCarousel";
import Navbar from "../../components/Navbar-Navigation/Navbar";

function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="mx-5 mt-5">
        <PrincipalCarousel/>
        <CategoriesCarousel/>
      </div>
    </div>
  );
}

export default Home;
