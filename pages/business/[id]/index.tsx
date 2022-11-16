import React, { ReactElement } from "react";
import BusinessLayout from "../../../layouts/BusinessLayout";
import { NextPageWithLayout } from "../../_app";

const BusinessHome: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Bienvenido al mejor lugar para vender!
      </h1>
      <div className="flex flex-row mt-5">
        <div className="w-1/6 h-16 bg-tiffany-green/10  flex items-center text-center mr-5 border-2 border-medium-violet">
          <h2 className="font-semibold text-lg w-full text-center">Ir a tus productos</h2>
        </div>
		<div className="w-1/6 h-16 bg-tiffany-green/10  flex items-center text-center mr-5 border-2 border-medium-violet">
          <h2 className="font-semibold text-lg w-full text-center">Ir a tus órdenes</h2>
        </div>
		<div className="w-1/6 h-16 bg-tiffany-green/10  flex items-center text-center border-2 border-medium-violet">
          <h2 className="font-semibold text-lg w-full text-center">Ir a tu información empresarial</h2>
        </div>
      </div>
    </div>
  );
};

BusinessHome.getLayout = function getLayout(page: ReactElement) {
  return <BusinessLayout>{page}</BusinessLayout>;
};

export default BusinessHome;
