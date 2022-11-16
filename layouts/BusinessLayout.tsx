import { useEffect, useState } from 'react';
import { AuthGuardBusiness } from '../components/AuthGuard';
import NavbarBusiness from '../components/Navbar-Navigation/NavbarBusiness';
import VerticalNavbarBusiness from '../components/Navbar-Navigation/VerticalNavbarBusiness';
import { userSignal } from '../signals/userSignal';
import { BusinessInfo } from '../types/business';
import { User } from '../types/user';

interface LayoutProps {
	children: JSX.Element;
}

export default function BusinessLayout({ children }: LayoutProps) {
	return (
		<AuthGuardBusiness>
			<div>
				<NavbarBusiness />
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
