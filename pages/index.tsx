import { ReactElement } from 'react';
import CategoriesCarousel from '../components/HomeElementsMarketplace/CategoriesCarousel';
import PrincipalCarousel from '../components/HomeElementsMarketplace/PrincipalCarousel';
import { DefaultLayout } from '../layouts/DefaultLayout';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	return (
		<div className="mx-5 mt-5">
			<PrincipalCarousel />
			<CategoriesCarousel />
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
