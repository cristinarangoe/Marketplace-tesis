import React, { ReactElement } from 'react';
import BusinessLayout from '../../../layouts/BusinessLayout';
import { NextPageWithLayout } from '../../_app';

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
