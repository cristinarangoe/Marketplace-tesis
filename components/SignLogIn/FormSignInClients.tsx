import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;

  phone: number;
  email: string;
  IDType: string;
  ID: string;
  password: string;
  confirmPassword: string;
};

const FormSignInClients = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log('signup')

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center mx-auto bg-red-300 px-5"
      >
        <div className="flex flex-row mt-3">
          <div className="flex flex-col w-1/2">
            <label className="">Primer nombre</label>
            <input
              {...(register("firstName"), { required: true })}
              className="mr-8 p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label>Segundo nombre</label>
            <input
              {...(register("secondName"), { required: false })}
              className=" p-1 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row mt-3">
          <div className="flex flex-col w-1/2">
            <label className="">Primer apellido</label>
            <input
              {...(register("firstLastName"), { required: true })}
              className="mr-8 p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label>Segundo apellido</label>
            <input
              {...(register("secondLastName"), { required: false })}
              className=" p-1 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col mt-3">
          <label>Número de telefono</label>
          <input
            {...(register("phone"), { required: true })}
            className=" p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-3 ">
          <label>Correo electrónico</label>
          <input
            type="email"
            {...(register("email"), { required: true })}
            className=" p-1 rounded-md"
          />
        </div>

        <div className="flex flex-row mt-3">
          <div className="flex flex-col w-2/6">
            <label>Tipo de identificación</label>
            <select
              {...register("IDType", { required: true })}
              className="mr-8 p-1 rounded-md h-full"
            >
              <option value="CC">Cedula de ciudadania</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="CE">Cedula de extranjería</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="flex flex-col w-4/6">
            <label>Número de identificación</label>
            <input
              {...(register("ID"), { required: true })}
              className=" p-1 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-row mt-3">
          <div className="flex flex-col w-1/2">
            <label className="">Contraseña</label>
            <input
              type="password"
              {...(register("password"), { required: true })}
              className="mr-8 p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label>Repetir Contraseña</label>
            <input
              type="password"
              {...(register("confirmPassword"), { required: true })}
              className=" p-1 rounded-md"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Registrarse"
          className=" mt-5 mx-auto py-2 px-3 rounded-md bg-green-600"
        />
      </form>
    </div>
  );
};

export default FormSignInClients;
