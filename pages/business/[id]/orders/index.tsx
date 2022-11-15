import { ReactElement } from "react";
import OrderItem from "../../../../components/OrdersBusiness/OrderItem";
import BusinessLayout from "../../../../layouts/BusinessLayout";
import { address, Client, ProductInOrder, Order } from "../../../../types";
import { NextPageWithLayout } from "../../../_app";

const OrdersViewPage: NextPageWithLayout = () => {
  let shippingAdress: address = {
    state: "Antioquia",
    city: "Medellín",
    street: "Calle 7 sur #23-03",
    floor: "apto 1304",
    neighbourhood: "El poblado",
    nameRecipient: "Cristina Arango Escobar",
  };
  let client: Client = {
    name: "cristina arango escobar",
    phone: "3217397457",
    email: "cristinarangoe@hotmail.com",
    shippingAdress,
    id: "1017273163",
  };

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
      status: "Recibida",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
    },
    {
      id: "002",
      totalPrice: 45000,
      status: "Progreso",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
    },
    {
      id: "003",
      totalPrice: 45000,
      status: "Enviada",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
    },
    {
      id: "004",
      totalPrice: 45000,
      status: "Recibida",
      date: new Date("2019-01-16"),
      shipping: 4000,
      client,
      products,
    },
  ];
  return (
    <div className="">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Órdenes</h1>
      </div>
      <div className="shadow-md border py-3 px-5 rounded-md mt-5">
        <div className="flex flex-row items-center border-b-2 border-b-gray-100 pb-3 font-semibold text-lg">
          <div className="basis-1/5 mx-auto">
            <h3>Número de orden</h3>
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
        <div className="">
          {orders.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

OrdersViewPage.getLayout = function getLayout(page: ReactElement) {
  return <BusinessLayout>{page}</BusinessLayout>;
};

export default OrdersViewPage;
