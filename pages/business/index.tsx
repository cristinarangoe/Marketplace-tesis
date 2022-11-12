import React from 'react';
import NavbarBusiness from '../../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../../components/Navbar-Navigation/VerticalNavbarBusiness';
import OrderItem from '../../components/OrdersBusiness/OrderItem';
import { address, Client, Order, ProductInOrder } from '../../types';

function BusinessHome() {
	return (
		<div>
			<NavbarBusiness />
			<div className="flex">
				<VerticalNavbarBusiness />
				<div className="mx-8 mt-5 w-full">
					<div className="mb-2">
						<h1 className="text-2xl font-bold">Business Home</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessHome;
