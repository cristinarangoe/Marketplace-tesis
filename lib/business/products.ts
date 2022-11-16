import { Product } from './../../types/products';
import { Item } from '../../types';
import { DBProduct } from '../../types/products';

const CREATE_PRODUCT_URL =
	'https://createproductworker.cristinarangoe2584.workers.dev/business';
export const URL_BUSINESS =
	'https://readbusinessworker.cristinarangoe2584.workers.dev/business';

export async function saveProducts(p: DBProduct[]) {
	try {
		// const formdata = new FormData();
		// p.forEach((product, i) => {
		// 	const { image, ...rest } = product;
		// 	formdata.append(`product_${i}`, JSON.stringify(rest));
		// 	formdata.append(`image_${i}`, image);
		// });

		const res = await fetch(`${CREATE_PRODUCT_URL}/createProduct`, {
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

export async function deleteProduct(productId: string) {
	try {
		const res = await fetch(`${URL_BUSINESS}/product/delete`, {
			method: 'DELETE',
			body: JSON.stringify({
				productId: productId,
			}),
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}
