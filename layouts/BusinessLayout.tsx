import NavbarBusiness from '../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../components/Navbar-Navigation/VerticalNavbarBusiness';

interface LayoutProps {
	children: JSX.Element;
}

export default function BusinessLayout({ children }: LayoutProps) {
	return (
		<div>
			<NavbarBusiness />
			<div className="flex">
				<VerticalNavbarBusiness />
				<div className="mx-8 mt-5 w-full">
					<div className="mb-2">{children}</div>
				</div>
			</div>
		</div>
	);
}
