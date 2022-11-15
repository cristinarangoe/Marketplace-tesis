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

    <div className="inline-block w-80 p-4 m-4  shadow-md rounded-lg ease-in-out duration-300 border">
      <div className="flex flex-col">
        <div className="relative h-[10rem]">
          <Link href="/Marketplace/ProductDetail">
            <a>
              <Image
                className="px-2"
                src={cat.image}
                alt={cat.name}
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>

        <h3 className="text-2xl my-4 text-center">
          <Link href="/Marketplace/ProductDetail">{cat.name}</Link>
        </h3>
      </div>
    </div>
  );
}

export default CategorieItem;
