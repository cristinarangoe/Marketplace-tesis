import { businessInfo } from '../../signals/businessSignal';
import { DBProduct } from '../../types/products';

const URL = 'http://localhost:5173/business/createProduct';

export async function saveProducts(p: DBProduct[]) {
	try {
		const formdata = new FormData();
		p.forEach((product, i) => {
			const { image, ...rest } = product;
			formdata.append(`product_${i}`, JSON.stringify(rest));
			formdata.append(`image_${i}`, image);
		});

		const res = await fetch(URL, {
			method: 'POST',
			body: formdata,
		});
		return res;
	} catch (e) {
		console.log(e);
	}
}
