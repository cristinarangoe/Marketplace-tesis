import React from "react";
import Navbar from "../../components/Navbar-Navigation/Navbar";
import OrderItem from "../../components/OrdersBusiness/OrderItem";
import OrderItemUser from "../../components/UserProfileMarketplace/OrderItemUser";
import VerticalBarUser from "../../components/UserProfileMarketplace/VerticalBarUser";
import { address, businessInOrder, Client, Order, ProductInOrder } from "../../types";

function UserOrders() {
  let shippingAdress: address = {
    state: 'Antioquia',
    city: 'Medellín',
    street: 'Calle 7 sur #23-03',
    floor: 'apto 1304',
    neighbourhood: 'El poblado',
    nameRecipient: 'Cristina Arango Escobar',
}

  let client: Client = {
    name: "cristina arango escobar",
    phone: "3217397457",
    email: "cristinarangoe@hotmail.com",
    shippingAdress,
    id: "1017273163",
  };

  let business: businessInOrder = {
    id:'001',
    name: 'hi dia'
  }

  let products: ProductInOrder[] = [
    {
      id: "001",
      name: "arepa1",
      image: "/Logo.png",
      price: 12000,
      quantity: 2,
    },
    {
      id: "002",
      name: "arepa2",
      image: "/Logo.png",
      price: 12000,
      quantity: 4,
    },
  ];

  let orders: Order[] = [
    {
      id: "001",
      totalPrice: 45000,
      status: "complete",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
      business
    },
    {
      id: "002",
      totalPrice: 45000,
      status: "complete",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
      business
    },
    {
      id: "003",
      totalPrice: 45000,
      status: "complete",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
      business
    },
    {
      id: "004",
      totalPrice: 45000,
      status: "complete",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
      business
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex">
        <VerticalBarUser
          styleUser=""
          styleAdress=""
          styleOrders="border-r-4 border-r-tiffany-green"
        />
        <div className="w-full px-16 mt-8">
          <div className="mb-2">
            <h1 className="text-3xl font-bold">Órdenes</h1>
          </div>
          <div className="flex flex-row items-center border-b-2 border-b-gray-100 mt-5 pb-2">
            <div className="basis-1/4 mx-auto">
              <h3 className="text-lg font-medium text-medium-violet">Número de orden</h3>
            </div>
            <div className="basis-1/4 mx-auto">
              <h3 className="text-lg font-medium text-medium-violet">Fecha</h3>
            </div>
            <div className="basis-1/4">
              <h3 className="text-lg font-medium text-medium-violet">Emprendimiento</h3>
            </div>
            <div className="basis-1/4">
              <h3 className="text-lg font-medium text-medium-violet">Total</h3>
            </div>
          </div>
          <div>
            {orders.map((order, index) => (
              <OrderItemUser key={index} order={order}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;