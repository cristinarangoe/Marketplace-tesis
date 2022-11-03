import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategorieItem({ cat }: any) {
  return (
    // <div className="w-1/5 inline-block relative mx-5">
    //   <Link href="/">
    //     <div className="w-full bg-teal-600 px-5 py-3 h-1/4 break-all">

    //       <Image src={cat.image} height="60" width="60" />
    //       <p className="overflow-auto break-all">{cat.name}</p>
    //     </div>
    //   </Link>
    // </div>

    <div className="inline-block w-60 p-4 m-4  shadow-md rounded-lg ease-in-out duration-300">
      <div className="flex flex-col">
        <div>
          <Link href="/Marketplace/ProductDetail">
            <Image
              className="px-2"
              src={cat.image}
              alt={cat.name}
              width="100"
              height="100"
            />
          </Link>
        </div>

        <h3 className="text-2xl my-4">
          <Link href="/Marketplace/ProductDetail">{cat.name}</Link>
        </h3>
      </div>
    </div>
  );
}

export default CategorieItem;
