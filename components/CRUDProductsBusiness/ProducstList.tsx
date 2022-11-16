import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import { URL_BUSINESS } from '../../lib/business/products';
import fetcher from '../../lib/utils';
import { Item } from '../../types';
import ProductItem from './ProductItem';

export const ProducstList = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, error } = useSWR(`${URL_BUSINESS}/${id}/products`, fetcher);

	if (error) return <p>{JSON.stringify(error)}</p>;

	if (!data) return <p>loading</p>;

	const products: Item[] = data as Item[];

	console.log(data);
	return (
		<div>
			{products.map((product, key) => (
				<ProductItem key={key} producto={product} />
			))}
		</div>
	);
};
