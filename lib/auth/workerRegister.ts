import { ClientSchema, EntrepreneurSchema } from '../../types';

const REGISTER_URL = 'https://register.cristinarangoe2584.workers.dev';

export async function registerClient(client: ClientSchema) {
	try {
		console.log(client);
		const request = await fetch(`${REGISTER_URL}/client/register`, {
			method: 'POST',
			body: JSON.stringify(client),
		});
		return request;
	} catch (e) {
		throw e;
	}
}

export async function registerEntrepreneur(entrepreneur: EntrepreneurSchema) {
	const request = await fetch(`${REGISTER_URL}/entrepreneur/register`, {
		method: 'Post',
		body: JSON.stringify(entrepreneur),
	});
}
