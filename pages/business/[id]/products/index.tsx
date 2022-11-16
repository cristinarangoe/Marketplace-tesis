import Link from 'next/link';
import { ReactElement } from 'react';
import ProductItem from '../../../../components/CRUDProductsBusiness/ProductItem';
import BusinessLayout from '../../../../layouts/BusinessLayout';
import { Item } from '../../../../types';
import { NextPageWithLayout } from '../../../_app';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import fetcher from '../../../../lib/utils';
import { URL_BUSINESS } from '../../../../lib/business/products';

const CRUDProductBusiness: NextPageWithLayout = () => {
	// let products: Item[] = [
	// 	{
	// 		id: '001',
	// 		nombre: 'Plato mexicano ',
	// 		precio: 12000,
	// 		descripcion: 'plato con deliciosos ingredientes',
	// 		imagen: 'https://c90c277d9089aefac81645bdd3cfe3e2.r2.cloudflarestorage.com/marketplace-images/platoMexicano.png',
	// 		categoria: 'Mexicano',
	// 		stock: 5,
	// 	},
	// 	{
	// 		id: '002',
	// 		nombre: 'Nachos',
	// 		precio: 10000,
	// 		descripcion: 'plato con deliciosos ingredientes',
	// 		imagen: '/Logo.png',
	// 		categoria: 'Mexicano',
	// 		stock: 5,
	// 	},
	// ];

	const router = useRouter();
	const { id } = router.query;

	const { data, error } = useSWR(`${URL_BUSINESS}/${id}/products`, fetcher);

	if (error) return <p>{JSON.stringify(error)}</p>;

	if (!data) return <p>loading</p>;

	const products: Item[] = data as Item[];

	console.log(data);

	return (
		<>
			<div className="">
				<div className="flex justify-between">
					<div className="">
						<h1 className="text-3xl font-bold">Productos</h1>
					</div>
					<div className="">
						<button className="bg-medium-violet text-white font-semibold px-3 py-2 rounded-lg">
							<Link href={`/business/${id}/products/addProductForm`}>
								Adicionar producto
							</Link>
						</button>
					</div>
				</div>
				<div className="shadow-md border py-3 px-5 rounded-md mt-5">
					<div className="flex flex-row items-center border-b-2 border-b-gray-100 pb-3 font-semibold text-lg">
						<div className="basis-1/6 mx-auto"></div>
						<div className="basis-2/6 mx-auto px-5">
							<h3>Producto</h3>
						</div>
						<div className="basis-1/6">
							<h3>Inventario</h3>
						</div>
						<div className="basis-1/6">
							<h3>Precio</h3>
						</div>
						<div className="basis-1/6"></div>
					</div>
					<div>
						{products.map((product, key) => (
							<ProductItem key={key} producto={product} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

CRUDProductBusiness.getLayout = function getLayout(page: ReactElement) {
	return <BusinessLayout>{page}</BusinessLayout>;
};

export default CRUDProductBusiness;
