export interface Product {
	name: string;
	description: string;
	characteristics: {
		type: string;
		value: string;
	}[];
	image: File | string;
	price: number;
}

export interface DBProduct extends Product {
	idBusiness: string;
	businessType: string;
}
