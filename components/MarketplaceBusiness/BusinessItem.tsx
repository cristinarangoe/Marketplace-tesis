import Image from "next/image";
import Link from "next/link";
import React from "react";

function BusinessItem({ business }: { business: any }) {
  return (
    <Link href="/">
      <div>
        <div className="hover:shadow-lg border border-gray-100 rounded-full bg-gray-100 items-center block relative w-[15rem] h-[15rem] px-36">
          <div className="">
            <Image
            className="mx-5"
              src={business.img}
              alt={business.nombre}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <h2 className="text-center text-xl font-bold text-medium-violet mt-2">
          {business.name}
        </h2>
      </div>
    </Link>
  );
}

export default BusinessItem;
