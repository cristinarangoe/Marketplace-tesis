import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import Image from "next/image";
import AlreadyAnAccount from "../SignLogIn/AlreadyAnAccount";
import { URL_IMAGES } from "../../lib/utils";

const DialogClientBusiness = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <p className="text-black text-xl font-medium">Inicia sesión</p>
      </Dialog.Trigger>

      <Dialog.Portal className="relative">
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0">
          <div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
          <Dialog.Content className="overflow-y-auto overscroll-x-none fixed  rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-96 w-1/4 shadow-2xl bg-white">
            <div className=" flex flex-row h-1/2 bg-tiffany-green/25 text-center p-3 items-center">
              <div className="basis-1/2">
                {" "}
                <h2 className="text-2xl font-medium py-5">
                  Bienvenido a ... Un lugar para comprar de todo
                </h2>
              </div>
              <div className="basis-1/2 relative h-[10rem] w-fit px-5">
                <Image src={`${URL_IMAGES}/Illustration.png`} alt="ecommerce" layout="fill" objectFit='contain' />
              </div>
            </div>
            <div className="text-white bg-white h-1/2 flex flex-col  ">
              <div className="basis-2/3 flex items-center">
                <button className="bg-medium-violet text-lg px-16 py-3 rounded-md mx-auto">
                  <Link href="/Register">
                    <p>Registro</p>
                  </Link>
                </button>
              </div>

              <div className="basis-1/3 border-t border-gray-400 flex justify-center items-center">
                <AlreadyAnAccount
                  message="Ya tienes cuenta?"
                  buttonMessage="Inicia sesión"
                />
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogClientBusiness;
