import Link from 'next/link';
import { ReactElement } from 'react';
import ProductItem from '../../../../components/CRUDProductsBusiness/ProductItem';
import BusinessLayout from '../../../../layouts/BusinessLayout';
import { Item } from '../../../../types';
import { NextPageWithLayout } from '../../../_app';

const CRUDProductBusiness: NextPageWithLayout = () => {
	let products: Item[] = [];

	return (
		<>
			<div className=" mx-8 mt-5 w-full">
				<div className="flex justify-between">
					<div className="">
						<h1 className="text-2xl font-bold">Productos</h1>
					</div>
					<div className=" bg-purple-400">
						<Link href="/business/test/products/addProductForm">
							Adicionar producto
						</Link>
					</div>
				</div>
				<div className="flex flex-row items-center border-b-2 border-b-gray-100">
					<div className="basis-1/5 mx-auto"></div>
					<div className="basis-1/5 mx-auto">
						<h3>Producto</h3>
					</div>
					<div className="basis-1/5">
						<h3>Inventario</h3>
					</div>
					<div className="basis-1/5">
						<h3>Precio</h3>
					</div>
					<div className="basis-1/5"></div>
				</div>
				<div>
					{products.map((product, key) => (
						<ProductItem key={key} producto={product} />
					))}
				</div>
			</div>
		</>
	);
};

CRUDProductBusiness.getLayout = function getLayout(page: ReactElement) {
	return <BusinessLayout>{page}</BusinessLayout>;
};

export default CRUDProductBusiness;
