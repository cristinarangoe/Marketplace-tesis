import { Address, ItemInCart } from '.';
import { ClientInfo } from './client';

export interface BusinessInfo {
	_id: string;
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

export interface OrderBussinessDB {
	address: Address;
	client: ClientInfo;
	idBusiness: string;
	paymentMethod: string;
	products: ItemInCart[];
	shippingPrice: number;
	totalPrice: number;
	_id: string;
}
