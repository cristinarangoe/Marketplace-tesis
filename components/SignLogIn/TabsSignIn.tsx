import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

const TabsSignIn = ({
  client,
  business,
}: {
  client: JSX.Element;
  business: JSX.Element;
}) => {
  const [active, setActive] = useState({ tab1: true, tab2: false });
  const changeTabState = (tab: "tab1" | "tab2"): void => {
    if (!active[tab]) {
      const otherTab: any = Object.keys(active).find((key) => key !== tab);
      setActive({
        ...active,
        [tab]: true,
        [otherTab]: false,
      });
      console.log(tab);
    }
  };

  return (
    <div className="">
      <Tabs.Root
        defaultValue="tab1"
        orientation="vertical"
        className="w-full h-full rounded-md"
      >
        <Tabs.List className="grid grid-cols-2 w-full border-b-2  border-b-gray-200 mb-2">
          <Tabs.Trigger
            value="tab1"
            className={`text-lg text-center mr-5  rounded-t-lg ${
              active.tab1
                ? " font-bold text-tiffany-green bg-white py-2  border-b-2 border-b-tiffany-green"
                : " font-semibold bg-white text-black"
            }`}
            onClick={() => changeTabState("tab1")}
          >
            Cliente
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className={`text-lg text-center ml-5  rounded-t-lg ${
              active.tab2
			  ? " font-bold text-tiffany-green bg-white  py-2  border-b-2 border-b-tiffany-green"
			  : " font-semibold bg-white text-black"
            }`}
            onClick={() => changeTabState("tab2")}
          >
            Emprendedor
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" className="px-5">{client}</Tabs.Content>
        <Tabs.Content value="tab2" className="px-5">{business}</Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default TabsSignIn;
