import CategoriesCarousel from '../components/HomeElementsMarketplace/CategoriesCarousel';
import PrincipalCarousel from '../components/HomeElementsMarketplace/PrincipalCarousel';
import Navbar from '../components/Navbar-Navigation/Navbar';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	return (
		<div className="">
			<Navbar />
			<div className="mx-5 mt-5">
				<PrincipalCarousel />
				<CategoriesCarousel />
			</div>
		</div>
	);
};

export default Home;
