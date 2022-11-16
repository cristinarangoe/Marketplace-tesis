import { ReactElement } from 'react';
import useSWR from 'swr';
import Loading from '../../../../components/Navbar-Navigation/Loading';
import OrderItem from '../../../../components/OrdersBusiness/OrderItem';
import BusinessLayout from '../../../../layouts/BusinessLayout';
import { URL_BUSINESS } from '../../../../lib/business/products';
import fetcher from '../../../../lib/utils';
import { userSignal } from '../../../../signals/userSignal';
import { OrderDB } from '../../../../types';
import { OrderBussinessDB } from '../../../../types/business';
import { NextPageWithLayout } from '../../../_app';

const OrdersViewPage: NextPageWithLayout = () => {
	const { data, error } = useSWR<OrderBussinessDB[], Error>(
		`${URL_BUSINESS}/${userSignal.value?.data._id}/orders`,
		fetcher
	);

	if (error)
		return (
			<div>
				<p>error</p>
			</div>
		);

	if (!data) return <Loading />;

	const orders: OrderDB[] = [];
	data.forEach((o) => {
		const tmpOrder: OrderDB = {
			client: {
				name: o.client.firstLastName,
				email: o.client.email,
				idType: o.client.IDType,
				id: o.client.ID,
				phone: o.client.phone,
				_id: o.client._id,
			},
			address: o.address,
			paymentMethod: o.paymentMethod,
			products: o.products,
			totalPrice: o.totalPrice,
			idUser: o.client._id,
			_id: o._id,
		};
		orders.push(tmpOrder);
	});

	return (
		<div className="">
			<div className="mb-2">
				<h1 className="text-3xl font-bold">Órdenes</h1>
			</div>
			<div className="shadow-md border py-3 px-5 rounded-md mt-5">
				<div className="flex flex-row items-center border-b-2 border-b-gray-100 pb-3 font-semibold text-lg">
					<div className="basis-1/5 mx-auto">
						<h3>Número de orden</h3>
					</div>
					<div className="basis-1/5 mx-auto">
						<h3>Fecha</h3>
					</div>
					<div className="basis-1/5">
						<h3>Cliente</h3>
					</div>
					<div className="basis-1/5">
						<h3>Estado de envío</h3>
					</div>
					<div className="basis-1/5">
						<h3>Total</h3>
					</div>
				</div>
				<div className="">
					{orders.map((order, index) => (
						<OrderItem key={index} order={order} />
					))}
				</div>
			</div>
		</div>
	);
};

OrdersViewPage.getLayout = function getLayout(page: ReactElement) {
	return <BusinessLayout>{page}</BusinessLayout>;
};

export default OrdersViewPage;
