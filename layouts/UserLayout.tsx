import Navbar from '../components/Navbar-Navigation/Navbar';
import AddressItem from '../components/UserProfileMarketplace/AddressItem';
import DialogAddAddress from '../components/UserProfileMarketplace/DialogAddAddress';
import VerticalBarUser from '../components/UserProfileMarketplace/VerticalBarUser';

interface LayoutProps {
	children: JSX.Element;
}

export default function UserLayout({ children }: LayoutProps) {
	return (
		<div>
			<Navbar />
			<div className="flex">
				<VerticalBarUser
					styleUser=""
					styleAdress="border-r-4 border-r-tiffany-green"
					styleOrders=""
				/>
				<div className="w-full px-16 mt-8">{children}</div>
			</div>
		</div>
	);
}
