import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { $userId } from '../../signals/userSignal';
import { Order } from '../../types';

//This is the product that is in the orders view page container, each of the orders
function OrderItemUser({ order }: { order: Order }) {
	return (
		<div className="flex flex-row items-center border-b-2 border-b-gray-100 py-3">
			<div className="basis-1/4">
				<Link href={`/marketplace/user/${$userId}/orders/${order.id}`}>
					<h3 className="underline underline-offset-2 ">{order.id}</h3>
				</Link>
			</div>
			<div className="basis-1/4 pr-2">
				<h3>{order.date.toISOString()}</h3>
			</div>
			<div className="basis-1/4">
				{`${order.business}` !== undefined ? (
					<h3>order.business.name</h3>
				) : null}
			</div>
			<div className="flex flex-row basis-1/4">
				<h3>{order.totalPrice}</h3>
			</div>
		</div>
	);
}

export default OrderItemUser;
