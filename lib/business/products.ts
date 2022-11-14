import { Product } from './../../components/CRUDProductsBusiness/FormAddProduct';

interface DBProduct extends Product {
	idBusiness: string;
	businessType: string;
}

export async function saveProducts(p: DBProduct[]) {}
