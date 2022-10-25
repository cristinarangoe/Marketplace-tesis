import React from "react";
import FormLogIn from "../../components/SignLogIn/FormLogIn";
import FormSignInBusiness from "../../components/SignLogIn/FormSignInBusiness";
import Navbar from "../../components/Navbar-Navigation/Navbar";
import TabsSignLogIn from "../../components/SignLogIn/TabsSignLogIn";

const SignLogInBusiness = () => {
  console.log("cristina")
  return (
    <div>
      <div className="flex flex-col justify-center md:max-w-[640px] mx-auto mt-3 md:my-8 md:rounded-lg">
        <h2 className="mx-auto">Hola, eres un emprendimiento</h2>
        <TabsSignLogIn login={<FormLogIn />} signin={<FormSignInBusiness />} />
      </div>
    </div>
  );
};

export default SignLogInBusiness;
