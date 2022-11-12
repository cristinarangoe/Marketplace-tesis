import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { ClientSchema } from "../../types";

type FormData = {
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  phone: number;
  email: string;
  IDType: string;
  ID: string;
};

export default function DialogEditProfile({ client }: {client: ClientSchema}) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="font-semibold bg-medium-violet text-white py-3 px-6 rounded-lg mt-8 w-1/4">
          Editar información
        </button>
      </Dialog.Trigger>
      <Dialog.Portal className="relative">
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0">
        <div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
          <Dialog.Content className="overflow-y-auto overscroll-x-none fixed  rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-auto w-2/4 shadow-2xl bg-white px-8 py-8">
            <h2 className="text-2xl font-semibold">Editar datos personales</h2>
            <form
              onSubmit={onSubmit}
              className="flex flex-col justify-center mx-auto"
            >
              <div className="flex flex-row mt-3">
                <div className="flex flex-col w-1/2">
                  <label className="pb-1">Primer nombre</label>
                  <input
                    defaultValue={client.firstName}
                    placeholder={client.firstName}
                    {...register("firstName", { required: true })}
                    className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="pb-1">Segundo nombre</label>
                  <input
                    defaultValue={client.secondName}
                    placeholder={client.secondName}
                    {...register("secondName", { required: false })}
                    className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-row mt-3">
                <div className="flex flex-col w-1/2">
                  <label className="pb-1">Primer apellido</label>
                  <input
                    defaultValue={client.firstLastName}
                    placeholder={client.firstLastName}
                    {...register("firstLastName", { required: true })}
                    className="mr-8 p-1 rounded-md border-2 border-gray-200 shadow-sm"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="pb-1">Segundo apellido</label>
                  <input
                    defaultValue={client.secondLastName}
                    placeholder={client.secondLastName}
                    {...register("secondLastName", { required: false })}
                    className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-3">
                <label className="pb-1">Número de telefono</label>
                <input
                  defaultValue={client.phone}
                  placeholder={client.phone.toString()}
                  {...register("phone", { required: true })}
                  className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
                />
              </div>
              <div className="flex flex-row mt-3">
                <div className="flex flex-col w-1/2">
                  <label className="pb-1">Tipo de identificación</label>
                  <select
                    defaultValue={client.IDType}
                    {...register("IDType", { required: true })}
                    className="mr-8 p-1 h-full  rounded-md border-2 border-gray-200 shadow-sm"
                  >
                    <option value="CC">Cedula de ciudadania</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CE">Cedula de extranjería</option>
                    <option value="Otro" >Otro</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="pb-1">Número de identificación</label>
                  <input
                    defaultValue={client.ID}
                    placeholder={client.ID}
                    {...register("ID", { required: true })}
                    className=" p-1 rounded-md border-2 border-gray-200 shadow-sm"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Guardar cambios"
                className=" mt-5 py-2 px-3 rounded-md bg-medium-violet text-white font-medium text-lg"
              />
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
