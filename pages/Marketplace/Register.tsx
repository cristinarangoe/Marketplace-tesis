import React from "react";
import GoBack from "../../components/Navbar-Navigation/GoBack";
import AlreadyAnAccount from "../../components/SignLogIn/AlreadyAnAccount";
import FormSignInBusiness from "../../components/SignLogIn/FormSignInBusiness";
import FormSignInClients from "../../components/SignLogIn/FormSignInClients";
import TabsSignIn from "../../components/SignLogIn/TabsSignIn";

function Register() {
  return (
    <div className="bg-tiffany-green/5 min-h-screen">
      <GoBack link="/Marketplace/Home">Inicio</GoBack>
      <div className="flex flex-col justify-center w-2/5 mx-auto mt-3 md:my-8 rounded-xl border border-gray-200 bg-white shadow-lg  pb-3">
        <div className="text-center pt-8 pb-6 px-5">
          <h2 className="font-bold text-3xl">Registro</h2>
          <h2 className="font-medium text-lg pt-3">
            Deseas registrarte como?
          </h2>
        </div>
        <TabsSignIn
          client={<FormSignInClients />}
          business={<FormSignInBusiness />}
        />
        <AlreadyAnAccount message='Ya tienes cuenta?' buttonMessage='Inicia sesión'/>
      </div>
    </div>
  );
}

export default Register;
