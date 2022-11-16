import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { userSignal } from '../../signals/userSignal';
import { BusinessInfo } from '../../types/business';
import { User } from '../../types/user';

const NavbarBusiness = () => {
	const [business, setBusiness] = useState<User | undefined>();
	useEffect(() => {
		setBusiness(userSignal.value);
	}, []);
	return (
		<div className="w-screen  flex border-b items-center">
			<div className="ml-5 relative h-[4rem] w-[4rem] ">
				<Link href="/">
					<Image src="/Logo.svg" alt="logo" layout="fill" objectFit="contain" />
				</Link>
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
				{(
					<h3 className="ml-2">
						{(business?.data as BusinessInfo)?.businessName}
					</h3>
				) || <h3 className="ml-2"> Admin emprendedor</h3>}
			</div>
		</div>
	);
};

export default NavbarBusiness;
