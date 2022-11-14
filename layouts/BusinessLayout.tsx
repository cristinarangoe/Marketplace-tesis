import { useRouter } from 'next/router';
import { AuthGuardBusiness } from '../components/AuthGuard';
import NavbarBusiness from '../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../components/Navbar-Navigation/VerticalNavbarBusiness';

interface LayoutProps {
	children: JSX.Element;
}

export default function BusinessLayout({ children }: LayoutProps) {
	const router = useRouter();
	const { id } = router.query;

	return (
		// <AuthGuardBusiness>
		<div>
			<NavbarBusiness businessName={id as string} />
			<div className="flex">
				<VerticalNavbarBusiness />
				<div className="mx-8 mt-5 w-full">
					<div className="mb-2">{children}</div>
				</div>
			</div>
		</div>
		// </AuthGuardBusiness>
	);
}
