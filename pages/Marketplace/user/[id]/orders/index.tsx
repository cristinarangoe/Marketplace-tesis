import React, { ReactElement } from "react";
import Navbar from "../../../../../components/Navbar-Navigation/Navbar";
import OrderItemUser from "../../../../../components/UserProfileMarketplace/OrderItemUser";
import VerticalBarUser from "../../../../../components/UserProfileMarketplace/VerticalBarUser";
import UserLayout from "../../../../../layouts/UserLayout";
import useSWR from "swr";
import {
  Client,
  businessInOrder,
  ItemInCart,
  Order,
  Address,
  OrderDB,
} from "../../../../../types";
import { NextPageWithLayout } from "../../../../_app";
import { CLIENT_URL } from "../../../../../lib/client";
import fetcher from "../../../../../lib/utils";
import { userSignal } from "../../../../../signals/userSignal";

const UserOrders: NextPageWithLayout = () => {
  // let shippingAdress: Address = {
  // 	state: 'Antioquia',
  // 	city: 'Medellín',
  // 	street: 'Calle 7 sur #23-03',
  // 	floor: 'apto 1304',
  // 	neighbourhood: 'El poblado',
  // 	nameRecipient: 'Cristina Arango Escobar',
  // };

  // let client: Client = {
  // 	name: 'cristina arango escobar',
  // 	phone: '3217397457',
  // 	email: 'cristinarangoe@hotmail.com',
  // 	shippingAdress,
  // 	id: '1017273163',
  // };

  // let business: businessInOrder = {
  // 	id: '001',
  // 	name: 'hi dia',
  // };

  // let products: ProductInOrder[] = [
  // 	{
  // 		id: '001',
  // 		name: 'arepa1',
  // 		image: '/Logo.png',
  // 		price: 12000,
  // 		quantity: 2,
  // 	},
  // 	{
  // 		id: '002',
  // 		name: 'arepa2',
  // 		image: '/Logo.png',
  // 		price: 12000,
  // 		quantity: 4,
  // 	},
  // ];

  // let orders: Order[] = [
  // 	{
  // 		id: '001',
  // 		totalPrice: 45000,
  // 		status: 'complete',
  // 		date: new Date('2019-01-16'),
  // 		shipping: 4000,
  // 		client,
  // 		products,
  // 		business,
  // 	},
  // 	{
  // 		id: '002',
  // 		totalPrice: 45000,
  // 		status: 'complete',
  // 		date: new Date('2019-01-16'),
  // 		shipping: 4000,
  // 		client,
  // 		products,
  // 		business,
  // 	},
  // 	{
  // 		id: '003',
  // 		totalPrice: 45000,
  // 		status: 'complete',
  // 		date: new Date('2019-01-16'),
  // 		shipping: 4000,
  // 		client,
  // 		products,
  // 		business,
  // 	},
  // 	{
  // 		id: '004',
  // 		totalPrice: 45000,
  // 		status: 'complete',
  // 		date: new Date('2019-01-16'),
  // 		shipping: 4000,
  // 		client,
  // 		products,
  // 		business,
  // 	},
  // ];
  const { data, error } = useSWR<OrderDB[], Error>(
    `${CLIENT_URL}/orders/${userSignal.value?.data._id}`,
    fetcher
  );

  if (error)
    return (
      <div>
        <p>error</p>
      </div>
    );

  if (!data) return <p>loading</p>;

  let orders: OrderDB[] = data;
  return (
    <>
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Órdenes</h1>
      </div>
      <div className="flex flex-row items-center border-b-2 border-b-gray-100 mt-5 pb-2">
        <div className="basis-1/3 mx-auto">
          <h3 className="text-lg font-medium text-medium-violet">
            Número de orden
          </h3>
        </div>
        <div className="basis-1/3 mx-auto">
          <h3 className="text-lg font-medium text-medium-violet">Fecha</h3>
        </div>
        <div className="basis-1/3">
          <h3 className="text-lg font-medium text-medium-violet">Total</h3>
        </div>
      </div>
      <div>
        {orders.map((order, index) => (
          <OrderItemUser key={index} order={order} />
        ))}
      </div>
    </>
  );
};

UserOrders.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserOrders;
