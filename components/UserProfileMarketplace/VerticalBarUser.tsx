import Link from "next/link";
import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

function VerticalBarUser({
  styleUser,
  styleAdress,
  styleOrders,
}: {
  styleUser: any;
  styleAdress: any;
  styleOrders: any;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className=" h-screen w-1/5 flex flex-col pt-5 border-r-2 border-r-gray-200 pl-20 ">
      <h1 className="text-2xl font-semibold mt-5">Hola, cristina!</h1>
      <div className="mt-8 w-full">
        <Link href="/Marketplace/UserProfile">
          <div className={`flex flex-row ${styleUser} cursor-pointer hover:`}>
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h3 className="pl-3">Usuario</h3>
          </div>
        </Link>
        <Link href="/Marketplace/UserAdresses">
          <div className={`flex flex-row mt-6  ${styleAdress} cursor-pointer`}>
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
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>

            <h3 className="pl-3">Direcciones</h3>
          </div>
        </Link>
        <Link href="/Marketplace/UserOrders">
          <div className={`flex flex-row mt-6  ${styleOrders} cursor-pointer`}>
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <h3 className="pl-3">Órdenes</h3>
          </div>
        </Link>
        <AlertDialog.Root open={open} onOpenChange={setOpen}>
          <AlertDialog.Trigger>
            <button >
              <div className="flex flex-row mt-6 cursor-pointer">
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <h3 className="pl-3">Cerrar sesión</h3>
              </div>
            </button>
            <AlertDialog.Overlay>
              <div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
              <AlertDialog.Content className="bg-white rounded-md shadow-lg fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-2/6 p-5">
                <AlertDialog.Title className="text-xl font-medium mt-3">
                  Estás seguro que deseas cerrar sesión?
                </AlertDialog.Title>
                <div className="my-3 ">
                  <AlertDialog.Cancel>
                    <button
                      className="bg-medium-violet text-white px-5 py-2 rounded-md  border-2 border-medium-violet mr-5"
                      onClick={() => setOpen(false)}
                    >
                      Cancelar
                    </button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <button
                      className="bg-red-500 text-white px-5 py-2 rounded-md border-2 border-red-500"
                    >
                      Si, cerrar sesión
                    </button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Overlay>
          </AlertDialog.Trigger>
        </AlertDialog.Root>
      </div>
    </div>
  );
}

export default VerticalBarUser;
