import React from "react";
import { address } from "../../types";
import DialogEditAddress from "./DialogEditAddress";

function AddressItem({ address }: { address: address }) {
  return (
    <div className="rounded-lg bg-tiffany-green/5 px-5 py-3 border-2 shadow-md">
      <div>
        <p>{address.nameRecipient}</p>
        <p>{address.street}</p>
        <p>{address.floor}</p>
        <p>{address.neighbourhood}</p>
        <div className="flex flex-row justify-between">
          <p>
            {address.city},{address.state}
          </p>
            <DialogEditAddress address={address}/>
        </div>
      </div>
    </div>
  );
}

export default AddressItem;
