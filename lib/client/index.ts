import { userSignal } from './../../signals/userSignal';
import { Address, Order } from './../../types/index';
import { ClientInfo } from './../../types/client';
export const CLIENT_URL =
	'https://clientworker.cristinarangoe2584.workers.dev/client';

export async function getClientInfo(email: string): Promise<ClientInfo> {
	const data = await fetch(`${CLIENT_URL}/find/${email}`);
	return await data.json();
}

interface AddressDB extends Address {
	idUser: string;
}

export async function saveAddress(address: AddressDB) {
	const data = await fetch(`${CLIENT_URL}/address`, {
		method: 'POST',
		body: JSON.stringify(address),
	});
	return data;
}

export async function generateOrder(order: Order){
	const data = await fetch(`http://localhost:5173/client/createOrder`, {
		method: 'POST',
		body: JSON.stringify(order),
	});
	return data;
}
