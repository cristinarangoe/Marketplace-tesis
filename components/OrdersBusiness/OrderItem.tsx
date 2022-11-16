import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { userSignal } from '../../signals/userSignal';
import { Order, OrderDB } from '../../types';

//This is the product that is in the orders view page container, each of the orders
function OrderItem({ order }: { order: OrderDB }) {
	let received: string = 'bg-blue-400';
	let inProgress: string = 'bg-yellow-400';
	let shipped: string = 'bg-green-400';

	console.log(order);

	return (
		<div className="flex flex-row items-center border-b-2 border-b-gray-100 py-3">
			<div className="basis-1/5">
				<Link
					href={`/business/${userSignal.value?.data._id}/orders/${order._id}`}
				>
					<h3 className="underline underline-offset-2 text-blue-500 cursor-pointer">
						#{order._id}
					</h3>
				</Link>
			</div>
			<div className="basis-1/5 pr-2">
				<h3>{Date.now()}</h3>
			</div>
			<div className="basis-1/5">
				<h3>{order.client.name}</h3>
			</div>
			<div className="basis-1/5">
				<h3
					className={`w-fit px-2 py-1 rounded-lg ${
						// order.status == 'Recibida'
						// 	? received
						// 	: order.status == 'Progreso'
						// 	? inProgress
						// 	: shipped
						inProgress
					}`}
				>
					En progreso
					{/* {order.status} */}
				</h3>
			</div>
			<div className="flex flex-row basis-1/5">
				<h3>${order.totalPrice}</h3>
			</div>
		</div>
	);
}

export default OrderItem;
