import React from "react";
import GoBack from "../../components/Navbar-Navigation/GoBack";
import AlreadyAnAccount from "../../components/SignLogIn/AlreadyAnAccount";
import FormLogIn from "../../components/SignLogIn/FormLogIn";

function LogIn() {
  return (
    <div className="bg-tiffany-green/5 min-h-screen">
      <GoBack link="/Marketplace/Home">Inicio</GoBack>
      <div className="md:w-2/6 mx-auto mt-3 md:my-8 rounded-xl border border-gray-200 bg-white shadow-lg pb-3">
        <div className="text-center pt-8">
          <h2 className="font-bold text-3xl">Inicio de sesión</h2>
          <h2 className="font-medium text-lg pt-3">
            Ingresa tus credenciales para ingresar a tu cuenta
          </h2>
        </div>
        <FormLogIn />
        <div className="mt-3">
          <AlreadyAnAccount
            message="Aún no tienes cuenta?"
            buttonMessage="Registrate"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;
