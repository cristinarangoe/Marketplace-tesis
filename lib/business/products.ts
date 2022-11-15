import { DBProduct } from '../../types/products';

const URL =
	'https://createproductworker.cristinarangoe2584.workers.dev/business/createProduct';

export async function saveProducts(p: DBProduct[]) {
	try {
		// const formdata = new FormData();
		// p.forEach((product, i) => {
		// 	const { image, ...rest } = product;
		// 	formdata.append(`product_${i}`, JSON.stringify(rest));
		// 	formdata.append(`image_${i}`, image);
		// });

		const res = await fetch(URL, {
			method: 'POST',
			body: JSON.stringify(p),
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}
