import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import useSWR from "swr";
import GoBack from "../../../../../components/Navbar-Navigation/GoBack";
import Navbar from "../../../../../components/Navbar-Navigation/Navbar";
import ProductInOrderItem from "../../../../../components/OrdersBusiness/ProductInOrderItem";
import VerticalBarUser from "../../../../../components/UserProfileMarketplace/VerticalBarUser";
import UserLayout from "../../../../../layouts/UserLayout";
import { CLIENT_URL } from "../../../../../lib/client";
import fetcher from "../../../../../lib/utils";
import {
  Address,
  Client,
  businessInOrder,
  ItemInCart,
  Order,
  Item,
} from "../../../../../types";
import products from "../../../../business/[id]/products";
import { NextPageWithLayout } from "../../../../_app";

const SpecificOrderUser: NextPageWithLayout = () => {
  const router = useRouter();
  const { idOrder } = router.query;

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
  // 		price: 10000,
  // 		quantity: 2,
  // 	},
  // 	{
  // 		id: '001',
  // 		name: 'arepa1',
  // 		image: '/Logo.png',
  // 		price: 10000,
  // 		quantity: 2,
  // 	},
  // 	{
  // 		id: '001',
  // 		name: 'arepa1',
  // 		image: '/Logo.png',
  // 		price: 10000,
  // 		quantity: 2,
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

  // let order: Order | undefined = orders.find((order) => order.id === idOrder);
  // if (order === undefined) {
  // 	return <h2>Producto no encontrado</h2>;
  // }

  const { data, error } = useSWR<Order, Error>(
    // `${CLIENT_URL}/product/${idOrder}`,
    `http://localhost:5173/client/order/${idOrder}`,
    fetcher
  );
  if (error)
    return (
      <div>
        <p>error</p>
      </div>
    );

  if (!data) return <p>loading</p>;

  let order : Order | undefined = data;

  console.log(order);

  return (
    <>
      <GoBack link="/marketplace/user/test/orders" text="Órdenes" />
      <div className="flex mt-3 items-end">
        <h2 className="text-4xl font-bold mr-3">#{idOrder}</h2>
        {/* <h2>{order.date.toISOString()}</h2> */}
		<h2>Aca va la fecha</h2>
      </div>
      <div className="flex flex-row my-5">
        <div className="mr-5 bg-gray-100 shadow-md basis-2/3 px-3 py-5 h-full">
          <h2 className="text-2xl mb-5 font-medium">Detalles de la orden</h2>
          <div className="flex flex-row items-center border-b-2 border-b-gray-300">
            <div className="basis-2/5 mx-auto">
              <h3>Producto</h3>
            </div>
            <div className="basis-1/5 mx-auto">
              <h3>Precio</h3>
            </div>
            <div className="basis-1/5">
              <h3>Cantidad</h3>
            </div>
            <div className="basis-1/5">
              <h3>Total</h3>
            </div>
          </div>
          <div className="">
            {order.products.map((product, index) => (
              <ProductInOrderItem prod={product} key={index} />
            ))}
          </div>
          <div className="mt-5">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <h4 className="pb-3">Sub total</h4>
                <h4 className="pb-3">Envío</h4>
                <h4 className="pb-3">Total de la compra</h4>
              </div>
              <div className="flex flex-col ml-8">
                <div className="flex flex-col">
                  <h4 className="pb-3">{order.totalPrice - 4000}</h4>
                  <h4 className="pb-3">$4000</h4>
                  <h4 className="pb-3">{order.totalPrice}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex flex-col">
          <div className="bg-gray-100 shadow-md px-3 py-5">
            <h2 className="text-2xl mb-5 font-medium">Emprendimiento</h2>
            <div className=" pb-3">
              <h3 className="pt-2">order.business.name</h3>
              <h3 className="pt-2">id: order.business.id</h3>
            </div>
          </div>
          <div className="bg-gray-100 shadow-md px-3 py-5 mt-5">
            <h2 className="text-2xl mb-5 font-medium">
              Información del cliente y envío
            </h2>
            <div className="pb-3">
              <h3 className="pt-2">{order.client.name}</h3>
              <h3 className="pt-2">
				{order.address.street} - {order.address.floor}
              </h3>
              <h3 className="pt-2">
                {order.address.neighbourhood}
              </h3>
              <h3 className="pt-2">
                {order.address.state},{" "}
                {order.address.city}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SpecificOrderUser.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default SpecificOrderUser;
