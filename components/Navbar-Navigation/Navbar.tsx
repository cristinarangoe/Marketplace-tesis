import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DialogClientBusiness from './DialogClientBusiness';
import CategoriesNavigationMenu from './CategoriesNavigationMenu';
import { CartPlaceholder } from './CartPlaceholder';
import { $userId, userSignal } from '../../signals/userSignal';
import { User } from '../../types/user';

const Navbar = () => {
	const [user, setUser] = useState<User | undefined>();
	useEffect(() => {
		setUser(userSignal.value);
	}, []);
	return (
		<div className="z-10">
			<div className="flex flex-row w-full py-5 border-b-2 border-b-gray-200 items-center h-[5rem]">
				<div className="ml-5 relative h-[5rem] w-[5rem] ">
					<Link href="/">
						<Image
							src="/Logo.svg"
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</Link>
				</div>
				<div className="flex flex-row ml-5">
					<ul className="flex flex-row ">
						<li className="mr-5 text-black text-xl font-medium  z-20 hover:underline hover:decoration-medium-violet hover:underline-offset-4 hover:decoration-2">
							<CategoriesNavigationMenu />
						</li>
						<li className="mr-5 text-black text-xl font-medium z-20 hover:underline hover:decoration-medium-violet hover:underline-offset-4 hover:decoration-2">
							<Link href="/marketplace/BusinessesPage">
								<p>Emprendimientos</p>
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-row absolute right-0 mr-5">
					<ul className="flex flex-row items-center">
						{user ? (
							<>
								<Link href={`/marketplace/user/${$userId}/profile`}>
									<li className="mr-5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-8 h-8"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</li>
								</Link>
								<li>
									<CartPlaceholder />
								</li>
							</>
						) : (
							<li>
								<DialogClientBusiness />
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
