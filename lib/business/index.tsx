const URL =
	'https://readbusinessworker.cristinarangoe2584.workers.dev/business/findBusiness/';

interface BusinessInfo {
	ID: string;
	IDType: string;
	businessName: string;
	businessType: string;
	email: string;
	firstLastName: string;
	firstName: string;
	phone: number;
	secondLastName: string;
	_id: string;
}

export async function getBusinessInfo(email: string): Promise<BusinessInfo> {
	const data = await fetch(`${URL}${email}`);
	return await data.json();
}
