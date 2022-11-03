import Link from "next/link";
import { Props } from "next/script";
import React from "react";

function AlreadyAnAccount({message, buttonMessage} : {message: string, buttonMessage: string}) {
  return (
    <div>
      <div className="flex justify-center items-center pb-2">
        <div className="flex justify-center items-center ">
          <p className="text-black font-bold text-lg">
            {message}&nbsp;{" "}
          </p>
          <button className=" text-lg font-bold ">
            <Link href="/Marketplace/Login">
              <p className="text-tiffany-green font-bold">{buttonMessage}</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlreadyAnAccount;
