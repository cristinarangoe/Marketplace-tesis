import { ClientInfo } from './../../types/client';
const URL =
	'https://readclientworker.cristinarangoe2584.workers.dev/client/find/';

export async function getClientInfo(email: string): Promise<ClientInfo> {
	const data = await fetch(`${URL}${email}`);
	return await data.json();
}
