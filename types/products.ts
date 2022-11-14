export interface Product {
	name: string;
	description: string;
	characteristics: {
		type: string;
		value: string;
	}[];
	image: FileList;
	price: number;
}
