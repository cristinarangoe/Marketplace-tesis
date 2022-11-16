import { AuthGuardClient } from '../components/AuthGuard';
import Navbar from '../components/Navbar-Navigation/Navbar';
import VerticalBarUser from '../components/UserProfileMarketplace/VerticalBarUser';

interface LayoutProps {
	children: JSX.Element;
}

export default function UserLayout({ children }: LayoutProps) {
	return (
		<AuthGuardClient>
			<div>
				<Navbar />
				<div className="flex">
					<VerticalBarUser />
					<div className="w-full px-16 mt-8">{children}</div>
				</div>
			</div>
		</AuthGuardClient>
	);
}
