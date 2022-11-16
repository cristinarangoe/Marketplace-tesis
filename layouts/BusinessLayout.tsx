import { AuthGuardBusiness } from '../components/AuthGuard';
import NavbarBusiness from '../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../components/Navbar-Navigation/VerticalNavbarBusiness';
import { userSignal } from '../signals/userSignal';
import { BusinessInfo } from '../types/business';

interface LayoutProps {
	children: JSX.Element;
}

export default function BusinessLayout({ children }: LayoutProps) {
	const businessName = (userSignal.value?.data as BusinessInfo).businessName;
	return (
		<AuthGuardBusiness>
			<div>
				<NavbarBusiness businessName={businessName} />
				<div className="flex">
					<VerticalNavbarBusiness />
					<div className="mx-8 mt-5 w-full">
						<div className="mb-2">{children}</div>
					</div>
				</div>
			</div>
		</AuthGuardBusiness>
	);
}
