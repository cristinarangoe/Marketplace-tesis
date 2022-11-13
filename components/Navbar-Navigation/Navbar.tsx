import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import DialogClientBusiness from './DialogClientBusiness';
import { useUserContext } from '../../Context/Index';
import CategoriesNavigationMenu from './CategoriesNavigationMenu';
import { CartPlaceholder } from './CartPlaceholder';

const Navbar = () => {
	const { userStore, isAuthenticatedProp } = useUserContext();

	const user = userStore;

	console.log('navbar is isAuthenticated', isAuthenticatedProp);

	return (
		<div className="z-10">
			<div className="flex flex-row w-full py-5 border-b-2 border-b-gray-200 h-fit items-center">
				<div className="ml-5">
					<Link href="/">
						<Image src="/Logo.png" alt="logo" width={40} height={16} />
					</Link>
				</div>
				<div className="flex flex-row ml-5">
					<ul className="flex flex-row ">
						<li className="mr-5 text-black text-2xl font-medium  no-underline hover:underline  hover:decoration-cyan-300 ">
							<Link href="/marketplace/ProductsContainer">Productos</Link>
						</li>
						<li className="mr-5 text-black text-2xl font-medium hover:urderline hover:uderline-offset-2 hover:decoration-medium-violet hover:decoration-2 z-40">
							<CategoriesNavigationMenu />
						</li>
						<li className="mr-5 text-black text-2xl font-medium hover:urderline  hover:decoration-medium-violet ">
							<Link href="/marketplace/BusinessesPage">Emprendimientos</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-row absolute right-0 mr-5">
					<ul className="flex flex-row items-center">
						{isAuthenticatedProp ? (
							<>
								<li className="mr-5">
									<Link href="/marketplace/user/test/profile">
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
									</Link>
								</li>
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
