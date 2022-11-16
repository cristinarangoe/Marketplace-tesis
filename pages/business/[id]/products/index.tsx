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
import { ProducstList } from '../../../../components/CRUDProductsBusiness/ProducstList';

const CRUDProductBusiness: NextPageWithLayout = () => {
	const router = useRouter();
	const { id } = router.query;

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
					<ProducstList />
				</div>
			</div>
		</>
	);
};

CRUDProductBusiness.getLayout = function getLayout(page: ReactElement) {
	return <BusinessLayout>{page}</BusinessLayout>;
};

export default CRUDProductBusiness;
