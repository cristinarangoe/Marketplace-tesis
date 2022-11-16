export interface Item {
	_id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	businessType: string;
	characteristics: characteristics[];
	idBusiness: string,
}

export interface characteristics{
	type: string,
	value: string,
}

// export interface Order {
// 	_id: string;
// 	totalPrice: number;
// 	status: string;
// 	date: Date;
// 	address: Address;
// 	client: Client;
// 	products?: ProductInOrder[];
// 	business?: businessInOrder;
// }

export interface Order {
    client : Client,
    address : Address,
    paymentMethod: string,
    products: ItemInCart[],
    totalPrice: number,
	idUser: string,
}
export interface OrderDB {
	_id: string,
    client : Client,
    address : Address,
    paymentMethod: string,
    products: ItemInCart[],
    totalPrice: number,
	idUser: string,
}

export interface businessInOrder {
	id: string;
	name: string;
}

export interface Client {
    name: string,
    email: string,
    idType: string,
    id: string,
    phone: number
	_id: string,
}


export interface ItemInCart {
	_id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	quantity: number;
	total: number;
	idBusiness: string;
}

export interface ClientSchema {
	firstName: string;
	secondName?: string;
	firstLastName: string;
	secondLastName?: string;
	phone: number;
	email: string;
	IDType: string;
	ID: string;
	password: string;
	confirmPassword: string;
}

export interface EntrepreneurSchema {
	firstName: string;
	secondName?: string;
	firstLastName: string;
	secondLastName?: string;
	phone: number;
	email: string;
	IDType: string;
	ID: string;
	businessType: string;
	businessName: string;
	password: string;
	confirmPassword: string;
}

export interface BusinessInMarketplace{
	_id: string,
	firstName: string;
	secondName?: string;
	firstLastName: string;
	secondLastName?: string;
	phone: number;
	email: string;
	IDType: string;
	ID: string;
	businessType: string;
	businessName: string;
}

export interface Address {
	_id: string;
	state: string;
	city: string;
	street: string;
	floor: string;
	neighbourhood: string;
	nameRecipient: string;
}

export interface AddressDB {
	state: string;
	city: string;
	street: string;
	floor: string;
	neighbourhood: string;
	nameRecipient: string;
	
}
