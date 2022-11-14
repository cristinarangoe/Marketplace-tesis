import { BusinessInfo } from '../../types/business';

const URL =
	'https://readbusinessworker.cristinarangoe2584.workers.dev/business/findBusiness/';

export async function getBusinessInfo(email: string): Promise<BusinessInfo> {
	const data = await fetch(`${URL}${email}`);
	return await data.json();
}
