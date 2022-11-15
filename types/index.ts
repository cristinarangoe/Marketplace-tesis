export interface Item {
	id: string;
	nombre: string;
	precio: number;
	descripcion: string;
	imagen: string;
	categoria: string;
	stock: number;
}

export interface ItemInCart {
	id: string;
	nombre: string;
	precio: number;
	descripcion: string;
	imagen: string;
	categoria: string;
	stock: number;
	cantidad: number;
	total: number;
}

export interface Order {
	_id: string;
	totalPrice: number;
	status: string;
	date: Date;
	address: Address;
	client: Client;
	products?: ProductInOrder[];
	business?: businessInOrder;
}

export interface businessInOrder {
	id: string;
	name: string;
}

export interface Client {
	name: string;
	phone: string;
	email: string;
	shippingAdress: Address;
	id: string;
}

export interface ProductInOrder {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
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

export interface Address {
	state: string;
	city: string;
	street: string;
	floor: string;
	neighbourhood: string;
	nameRecipient: string;
}
