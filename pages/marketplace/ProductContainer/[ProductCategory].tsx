import React, { ReactElement } from "react";
import Navbar from "../../../components/Navbar-Navigation/Navbar";
import Product from "../../../components/Products/Product";
import useSWR from "swr";
import { CLIENT_URL } from "../../../lib/client";
import fetcher from "../../../lib/utils";
import { userSignal } from "../../../signals/userSignal";
import { Item, Order } from "../../../types";
import products from "../../business/[id]/products";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { NextPageWithLayout } from "../../_app";
import { DefaultLayout } from "../../../layouts/DefaultLayout";
import Loading from "../../../components/Navbar-Navigation/Loading";

const ProductCategory: NextPageWithLayout = () => {
  const router = useRouter();
  const category = router.query.ProductCategory;

  const { data, error } = useSWR<Item[], Error>(
    `${CLIENT_URL}/products/${category}`,
    fetcher
  );

  if (error)
    return (
      <div>
        <p>error</p>
      </div>
    );

  if (!data) return <Loading />;

  let products: Item[] = data;
  return (
    <div className="min-h-screen">
      <div className="grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-10">
        {products.map((prod, index) => (
          <Product product={prod} key={index} />
        ))}
      </div>
    </div>
  );
};
ProductCategory.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProductCategory;
