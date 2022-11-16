import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import useSWR from 'swr';
import Loading from '../../../components/Navbar-Navigation/Loading';

import ProductToCart from '../../../components/Products/ProductToCart';
import { DefaultLayout } from '../../../layouts/DefaultLayout';
import { CLIENT_URL } from '../../../lib/client';
import fetcher from '../../../lib/utils';

import { Item, Order } from '../../../types';
import { NextPageWithLayout } from '../../_app';

const ProductDetail: NextPageWithLayout = () => {
	const router = useRouter();
	const productId = router.query.ProductID;

	const { data, error } = useSWR<Item, Error>(
		`${CLIENT_URL}/product/${productId}`,
		fetcher
	);

	if (error)
		return (
			<div>
				<p>error</p>
			</div>
		);

	if (!data) return <Loading />;

	const producto: Item | undefined = data;

	if (producto === undefined) {
		return <h2>Producto no encontrado</h2>;
	}
	return (
		<div>
			<div key={producto._id} className="flex flex-row mx-16 mt-8">
				<div className="basis-1/2 grid justify-items-center relative h-[30rem] w-auto">
					<Image
						className="w-3/4"
						src={producto.image}
						alt={producto.name}
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="basis-1/2 mx-10">
					<h1 className="text-4xl font-bold text-tiffany-green">
						{producto.name}
					</h1>
					<p className="text-2xl my-4 font-normal">{producto.description}</p>
					<p className="text-2xl font-semibold ">${producto.price}</p>
					<ProductToCart producto={producto} initial={1} />
				</div>
			</div>
		</div>
	);
};
ProductDetail.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
export default ProductDetail;
