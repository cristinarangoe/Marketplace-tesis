import Link from "next/link";
import React from "react";

function BusinessItem({ business }: { business: any }) {
  return (
    <Link href='/'>
      <div>
        <div className="hover:shadow-lg border border-gray-100 rounded-full  bg-gray-100 items-center block">
          <img
            src={business.img}
            className="overflow-hidden whitespace-pre-wrap block object-cover  p-5"
          ></img>
        </div>
        <h2 className="text-center text-xl font-bold text-medium-violet mt-2">
          {business.name}
        </h2>
      </div>
    </Link>
  );
}

export default BusinessItem;
