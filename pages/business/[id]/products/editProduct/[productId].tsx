import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import FormEditProduct from '../../../../../components/CRUDProductsBusiness/FormEditProduct';
import GoBack from '../../../../../components/Navbar-Navigation/GoBack';
import { URL_BUSINESS } from '../../../../../lib/business/products';
import fetcher from '../../../../../lib/utils';
import { Item } from '../../../../../types';

function EditProductContainer() {
	const router = useRouter();

	const { productId, id } = router.query;

	const { data, error } = useSWR(
		`${URL_BUSINESS}/product/${productId}`,
		fetcher
	);

	if (error) return <p>{error}</p>;

	if (!data) return <p>loading</p>;

	const products: Item = data as Item;

	console.log(data);

	return (
		<div>
			<GoBack link="/business/test/products" text="Atras" />
			<FormEditProduct product={data as Item} />
		</div>
	);
}

export default EditProductContainer;
