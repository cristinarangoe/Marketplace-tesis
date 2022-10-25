import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import FormLogIn from "../../components/SignLogIn/FormLogIn";
import FormSignInClients from "../../components/SignLogIn/FormSignInClients";
import TabsSignLogIn from "../../components/SignLogIn/TabsSignLogIn";
import Navbar from "../../components/Navbar-Navigation/Navbar";

const SignLogInClients = () => {
  return (
    <div>

      <div className="flex flex-col justify-center md:max-w-[640px] mx-auto mt-3 md:my-8 md:rounded-lg">
        <h2 className="mx-auto">Hola, eres un cliente</h2>
        <TabsSignLogIn login={<FormLogIn />} signin={<FormSignInClients />} />
      </div>
    </div>
  );
};

export default SignLogInClients;
