import { Product } from './../../types/products';
import { Item } from '../../types';
import { DBProduct } from '../../types/products';

const CREATE_PRODUCT_URL =
	'https://createproductworker.cristinarangoe2584.workers.dev/business/createProduct';
export const URL_BUSINESS = 'http://localhost:5173/business';

export async function saveProducts(p: DBProduct[]) {
	try {
		// const formdata = new FormData();
		// p.forEach((product, i) => {
		// 	const { image, ...rest } = product;
		// 	formdata.append(`product_${i}`, JSON.stringify(rest));
		// 	formdata.append(`image_${i}`, image);
		// });

		const res = await fetch(`${URL_BUSINESS}/createProduct`, {
			method: 'POST',
			body: JSON.stringify(p),
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}

interface ProductUpdatableFields {
	name: string;
	price: number;
	description: string;
	image: string;
	stock: number;
}

export async function updateProduct(
	p: ProductUpdatableFields,
	idProduct: string
) {
	try {
		const res = await fetch(`${URL_BUSINESS}/product/update`, {
			method: 'PUT',
			body: JSON.stringify({
				id: idProduct,
				data: p,
			}),
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}

export async function deleteProduct(productId: string) {}
