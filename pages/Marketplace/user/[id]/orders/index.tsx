import React, { ReactElement } from 'react';
import Navbar from '../../../../../components/Navbar-Navigation/Navbar';
import OrderItemUser from '../../../../../components/UserProfileMarketplace/OrderItemUser';
import VerticalBarUser from '../../../../../components/UserProfileMarketplace/VerticalBarUser';
import UserLayout from '../../../../../layouts/UserLayout';
import useSWR from 'swr';
import { OrderDB } from '../../../../../types';
import { NextPageWithLayout } from '../../../../_app';
import { CLIENT_URL } from '../../../../../lib/client';
import fetcher from '../../../../../lib/utils';
import { userSignal } from '../../../../../signals/userSignal';
import Loading from '../../../../../components/Navbar-Navigation/Loading';

const UserOrders: NextPageWithLayout = () => {
	const { data, error } = useSWR<OrderDB[], Error>(
		`${CLIENT_URL}/orders/${userSignal.value?.data._id}`,
		fetcher
	);

	if (error)
		return (
			<div>
				<p>error</p>
			</div>
		);

	if (!data) return <Loading />;

	return (
		<>
			<div className="mb-2">
				<h1 className="text-3xl font-bold">Órdenes</h1>
			</div>
			<div className="flex flex-row items-center border-b-2 border-b-gray-100 mt-5 pb-2">
				<div className="basis-1/2 mx-auto">
					<h3 className="text-lg font-medium text-medium-violet">
						Número de orden
					</h3>
				</div>
				<div className="basis-1/2">
					<h3 className="text-lg font-medium text-medium-violet">Total</h3>
				</div>
			</div>
			<div>
				{data.map((order, index) => (
					<OrderItemUser key={index} order={order} />
				))}
			</div>
		</>
	);
};

UserOrders.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
};

export default UserOrders;
