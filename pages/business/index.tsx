import React, { ReactElement } from 'react';
import NavbarBusiness from '../../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../../components/Navbar-Navigation/VerticalNavbarBusiness';
import OrderItem from '../../components/OrdersBusiness/OrderItem';
import BusinessLayout from '../../layouts/BusinessLayout';
import { address, Client, Order, ProductInOrder } from '../../types';
import { NextPageWithLayout } from '../_app';

const BusinessHome: NextPageWithLayout = () => {
	return (
		<>
			<h1 className="text-2xl font-bold">Business Home</h1>
		</>
	);
};

BusinessHome.getLayout = function getLayout(page: ReactElement) {
	return <BusinessLayout>{page}</BusinessLayout>;
};

export default BusinessHome;
