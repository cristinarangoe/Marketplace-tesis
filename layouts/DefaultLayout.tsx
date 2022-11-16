import React from 'react';
import Navbar from '../components/Navbar-Navigation/Navbar';

interface LayoutProps {
	children: JSX.Element;
}

export const DefaultLayout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Navbar />
			<div>{children}</div>
		</div>
	);
};
