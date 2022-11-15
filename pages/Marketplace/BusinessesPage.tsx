import React from "react";
import useSWR from "swr";
import BusinessItem from "../../components/MarketplaceBusiness/BusinessItem";
import Navbar from "../../components/Navbar-Navigation/Navbar";
import { CLIENT_URL } from "../../lib/client";
import fetcher from "../../lib/utils";
import { BusinessInMarketplace, Item } from "../../types";

function BusinessesPage() {
  const { data, error } = useSWR<BusinessInMarketplace[], Error>(
    `${CLIENT_URL}/business`,
    fetcher
  );

  if (error)
    return (
      <div>
        <p>error</p>
      </div>
    );

  if (!data) return <p>loading</p>;

  let businesses : BusinessInMarketplace[] = data; 
  console.log(data)
  return (
    <div>
      <Navbar />
      <div className="mt-5 mx-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Emprendimientos que hacen parte de nuestra plataforma!
          </h1>
          <p className="mt-3 text-lg font-semibold">
            Presiona sobre cada uno de ellos para que conozcas lo que son y sus
            productos
          </p>
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-8 mt-8">
          {businesses.map((bus, index) => (
            <BusinessItem business={bus} key={index} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default BusinessesPage;
