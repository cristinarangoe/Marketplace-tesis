import Image from 'next/image';
import React from 'react';
import { useUserContext } from '../../Context/Index';

const NavbarBusiness = ({ businessName }: { businessName: string }) => {
	return (
		<div className="w-screen py-3 flex border-b ">
			<div className="ml-5">
				<Image src="/Logo.png" alt="logo" width={40} height={16} />
			</div>
			<div className="flex flex-row absolute right-0 mr-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				{<h3 className="ml-2">{businessName}</h3> || <h3 className="ml-2"> Admin emprendedor</h3>}
			</div>
		</div>
	);
};

export default NavbarBusiness;
