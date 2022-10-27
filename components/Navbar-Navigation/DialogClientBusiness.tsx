import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

const DialogClientBusiness = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Dialog.Trigger>

      <Dialog.Portal className="relative">
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0">
          <Dialog.Content className="overflow-y-auto overscroll-x-none fixed  rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] lg:w-[200vw] lg:max-w-[700px] h-1/2 p-[25px]">
            <div className="bg-purple-100 h-1/2 text-center">
              <h1 className="text-4xl font-medium py-5">
                Nos encanta tenerte con nosotros!
              </h1>
              <h2 className="text-2xl font-normal inline-block align-middle">
                Para poder empezar a disfrutar, elige una opción
              </h2>
            </div>
            <div className="text-white bg-gray-400 h-1/2 flex flex-row">
              <Link href="/Marketplace/SignLogInBusiness">
                <div className="bg-purple-500 h-16">
                  <p>Emprendedor</p>
                </div>
              </Link>

              <div>
                <Link href="/Marketplace/SignLogInClients">
                  <p>Cliente</p>
                </Link>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );

};

export default DialogClientBusiness;
