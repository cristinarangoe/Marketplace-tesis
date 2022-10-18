import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const FormLogIn = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log('login')

  return (
    <form onSubmit={onSubmit} className='flex flex-col justify-center mx-auto bg-red-300 px-5'>
      <div className="flex flex-col mt-3">
        <label className="">Correo electrónico</label>
        <input
        type='email'
          {...(register("email"), { required: true })}
          className=" p-1 rounded-md"
        />
      </div>
      <div className="flex flex-col ">
        <label className="">Contraseña</label>
        <input
        type='password'
          {...(register("password"), { required: true })}
          className=" p-1 rounded-md"
        />
      </div>

      <input
          type="submit"
          value="Iniciar sesión"
          className=" mt-5 mx-auto py-2 px-3 rounded-md bg-green-600"
        />
    </form>
  );
};

export default FormLogIn;
