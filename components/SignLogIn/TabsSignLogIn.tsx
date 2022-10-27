import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

const TabsSignLogIn = ({login , signin } : {login: JSX.Element, signin: JSX.Element}) => {

  const [active, setActive] = useState({tab1: true, tab2: false});

  const changeTabState = (tab : 'tab1' | 'tab2') : void => {
      if(!active[tab]){
        const otherTab : any = Object.keys(active).find((key) => key !== tab);
        setActive({
          ...active,
          [tab]: true,
          [otherTab]: false,
      })
      console.log(tab)
      }
  };

  return (
    <div>
      <Tabs.Root defaultValue="tab1" orientation="vertical"  className='w-full h-full rounded-md'>
        <Tabs.List className='grid grid-cols-2 w-full border-b-2 border-white'>
          <Tabs.Trigger value="tab1" className={`text-3xl text-center ${active.tab1 ? 'text-white bg-red-600  py-2': 'bg-black text-white rounded-none' }`} onClick={() => changeTabState("tab1")}>Iniciar sesión</Tabs.Trigger>
          <Tabs.Trigger value="tab2" className={`text-3xl text-center ${active.tab2 ? 'text-white bg-red-600  py-2': 'bg-black text-white rounded-none' }`} onClick={() => changeTabState("tab2")}>Registrarse</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          {login}
        </Tabs.Content>
        <Tabs.Content value="tab2">
          {signin}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default TabsSignLogIn;
