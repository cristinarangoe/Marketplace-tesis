import React, { useEffect } from 'react';
import FormAddProduct from '../../../../components/CRUDProductsBusiness/FormAddProduct';
import GoBack from '../../../../components/Navbar-Navigation/GoBack';

function AddProductContainer() {
	return (
		<div className="px-6 py-4">
			<GoBack link="/business/CRUDProductBusiness" text={'Atras'} />
			<section className="mt-4">
				<FormAddProduct />
			</section>
		</div>
	);
}

export default AddProductContainer;
