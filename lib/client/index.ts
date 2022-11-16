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
	// const data = await fetch(`${CLIENT_URL}/createOrder`, {
	// 	method: 'POST',
	// 	body: JSON.stringify(order),
	// });
	// return data;
	const data = await fetch(`${CLIENT_URL}/createOrder`, {
		method: 'POST',
		body: JSON.stringify(order),
	});
	return data;
}

export interface OrderUpdatableFields {
	state: string;
	city: string;
	street: string;
	floor: string;
	neighbourhood: string;
	nameRecipient: string;
}

export async function updateAddress(
	p: OrderUpdatableFields,
	idAddress: string
) {
	try {
		console.log(idAddress)
		console.log(idAddress)
		const res = await fetch(`${CLIENT_URL}/address/update`, {
			method: 'PUT',
			body: JSON.stringify({
				id: idAddress,
				data: p,
			}),
		});
		return res;
	} catch (e) {
		console.log("cristina")
		console.log(e);
	}
}

export interface UserUpdatableFields {
	firstName: string;
	secondName: string;
	firstLastName: string;
	secondLastName: string;
	phone: number;
	IDType: string;
	ID: string;
}

export async function updateUser(
	p: UserUpdatableFields,
	idUser: string
) {
	
	try {
		const res = await fetch(`${CLIENT_URL}/user/update`, {
			method: 'PUT',
			body: JSON.stringify({
				id: idUser,
				data: p,
			}),
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}
