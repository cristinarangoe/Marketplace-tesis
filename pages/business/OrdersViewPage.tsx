import React from "react";
import NavbarBusiness from "../../components/Navbar-Navigation/NavbarBusiness";
import VerticalNavbarBusiness from "../../components/Navbar-Navigation/VerticalNavbarBusiness";
import OrderItem from "../../components/OrdersBusiness/OrderItem";
import { address, Client, Order, ProductInOrder } from "../../types";

function OrdersViewPage() {
  let shippingAdress: address = {
    state: "Antioquia",
    city: "Medellín",
    street: "Calle 7 sur #23-03",
    floor: "apto 1304",
    neighbourhood: "El poblado",
    nameRecipient: "Cristina Arango Escobar",
  };
  let client : Client = {
    name: 'cristina arango escobar',
    phone: '3217397457',
    email: 'cristinarangoe@hotmail.com',
    shippingAdress,
    id: '1017273163'
  }

  let products : ProductInOrder[] = [{
    id: '001',
    name: 'arepa1',
    image: '/Logo.png',
    price: 12000,
    quantity: 2,
  },
  {
    id: '002',
    name: 'arepa2',
    image: '/Logo.png',
    price: 12000,
    quantity: 4,
  },
]

  let orders: Order[] = [
    {
      id: "001",
      totalPrice: 45000,
      status: "complete",
      date: new Date('2019-01-16'),
      shipping: 4000,
      client,
      products
    },
    {
      id: "002",
      totalPrice: 45000,
      status: "complete",
      date: new Date('2019-01-16'),
      shipping: 4000,
      client,
      products
    },
    {
      id: "003",
      totalPrice: 45000,
      status: "complete",
      date: new Date('2019-01-16'),
      shipping: 4000,
      client,
      products
    },
    {
      id: "004",
      totalPrice: 45000,
      status: "complete",
      date: new Date('2019-01-16'),
      shipping: 4000,
      client,
      products
    },
  ];
  return (
    <div>
      <NavbarBusiness />
      <div className="flex">
        <VerticalNavbarBusiness />
        <div className="mx-8 mt-5 w-full">
          <div className="mb-2">
            <h1 className="text-2xl font-bold">Órdenes</h1>
          </div>
          <div className="flex flex-row items-center border-b-2 border-b-gray-100">
            <div className="basis-1/5 mx-auto">
              <h3>ID Orden</h3>
            </div>
            <div className="basis-1/5 mx-auto">
              <h3>Fecha</h3>
            </div>
            <div className="basis-1/5">
              <h3>Cliente</h3>
            </div>
            <div className="basis-1/5">
              <h3>Estado de envío</h3>
            </div>
            <div className="basis-1/5">
              <h3>Total</h3>
            </div>
          </div>
          <div>
          {orders.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </div>
        </div>

      </div>
    </div>
  );
}

export default OrdersViewPage;