import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar-Navigation/Navbar";
import { userSignal } from "../../signals/userSignal";

function FinishedOrder() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col bg-white items-center mt-8">
        <h1 className="text-3xl font-bold px-10 pt-6 text-center text-medium-violet mb-5">
          Su compra fue hecha con éxito
        </h1>
        <h2 className="text-xl text-black font-medium">
          Dirígete a las órdenes para que veas el resumen de tu compra.
        </h2>
        <button className="bg-medium-violet text-tiffany-green py-2 px-5 rounded-lg text-xl font-semibold mt-5">
          <Link
            href={`/marketplace/user/${userSignal.value?.data?._id}/orders`}
            className=" p-2 rounded text-white mx-5 my-3 w-6/12"
          >
            Ir a órdenes
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FinishedOrder;
