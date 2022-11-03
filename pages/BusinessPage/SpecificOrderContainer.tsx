import React from "react";
import GoBack from "../../components/Navbar-Navigation/GoBack";
import NavbarBusiness from "../../components/Navbar-Navigation/NavbarBusiness";
import VerticalNavbarBusiness from "../../components/Navbar-Navigation/VerticalNavbarBusiness";
import { address, Client, Order, ProductInOrder } from "../../types";
import * as Select from "@radix-ui/react-select";
import ProductInOrderItem from "../../components/OrdersBusiness/ProductInOrderItem";
import OrderItem from "../../components/OrdersBusiness/OrderItem";

function SpecificOrderContainer() {
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
  let productsInOrder: ProductInOrder[] = [
    {
      id: "001",
      name: "arepa1",
      image: "/Logo.png",
      price: 10000,
      quantity: 2,
    },
    {
      id: "001",
      name: "arepa1",
      image: "/Logo.png",
      price: 10000,
      quantity: 2,
    },
    {
      id: "001",
      name: "arepa1",
      image: "/Logo.png",
      price: 10000,
      quantity: 2,
    },
  ];
  let order: Order = {
    id: "001",
    totalPrice: 45000,
    status: "complete",
    date: new Date('2019-01-16'),
    shipping: 4000,
    client,
    products: productsInOrder
  };
  return (
    <div>
      <NavbarBusiness />
      <div className="flex">
        <VerticalNavbarBusiness />
        <div className="mx-8 mt-5 w-full">
          <GoBack link="/BusinessPage/OrdersViewPage" children="Órdenes" />
          <div className="flex mt-3 items-end">
            <h2 className="text-4xl font-bold mr-3">#{order.id}</h2>
            <h2>{order.date.toISOString()}</h2>
          </div>
          {/* <div>
            <Select.Root>
              <Select.Trigger className="inline-flex items-center justify-center rounded-md border-2 border-rose-600 px-2 py-1 shadow-md text-stroke-purple-500">
                <Select.Value placeholder="hola" />
                <Select.Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.ScrollUpButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Select.ScrollUpButton>
                  <Select.Viewport>
                    <Select.Item value="apple">
                      <Select.ItemText>Apple</Select.ItemText>
                      <Select.ItemIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="banana">
                      <Select.ItemText>Apple</Select.ItemText>
                      <Select.ItemIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="hola2">
                      <Select.ItemText>Apple</Select.ItemText>
                      <Select.ItemIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="hola3">
                      <Select.ItemText>Apple</Select.ItemText>
                      <Select.ItemIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Viewport>
                  <Select.ScrollDownButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div> */}
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
                {productsInOrder.map((product, index) => (
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
                      <h4 className="pb-3">
                        {order.totalPrice - order.shipping}
                      </h4>
                      <h4 className="pb-3">{order.shipping}</h4>
                      <h4 className="pb-3">{order.totalPrice}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 shadow-md basis-1/3 px-3 py-5 h-full">
              <h2 className="text-2xl mb-5 font-medium">Cliente</h2>
              <div className="border-b-2 border-b-gray-300 pb-3">
                <h3 className="pt-2">{order.client.name}</h3>
                <h3 className="pt-2">{order.client.id}</h3>
              </div>
              <div className="pt-3 border-b-2 border-b-gray-300 pb-3">
                <h2 className="text-xl">Información de contacto</h2>
                <h3 className="pt-2">{order.client.email}</h3>
                <h3 className="pt-2">{order.client.phone}</h3>
              </div>
              <div className="pt-3">
                <h2 className="text-xl">Información de envío</h2>
                {/* <h3 className="pt-2">{order.client.shippingAdress}</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificOrderContainer;