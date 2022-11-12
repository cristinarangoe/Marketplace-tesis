import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import Image from 'next/image';
import AlreadyAnAccount from '../SignLogIn/AlreadyAnAccount';

const DialogClientBusiness = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger>
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
			</Dialog.Trigger>

			<Dialog.Portal className="relative">
				<Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0">
					<Dialog.Content className="overflow-y-auto overscroll-x-none fixed  rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-96 w-1/4 shadow-2xl bg-white">
						<div className=" flex flex-row h-1/2 bg-tiffany-green/25 text-center p-3 items-center">
							<div className="basis-1/2">
								{' '}
								<h2 className="text-2xl font-medium py-5">
									Bienvenido a ... Un lugar para comprar de todo
								</h2>
							</div>
							<div className="basis-1/2">
								<Image src="/Illustration.png" width="150" height="150" />
							</div>
						</div>
						<div className="text-white bg-white h-1/2 flex flex-col  ">
							<div className="basis-2/3 flex items-center">
								<button className="bg-medium-violet text-lg px-16 py-3 rounded-md mx-auto">
									<Link href="/Register">
										<p>Registro</p>
									</Link>
								</button>
							</div>

							<div className="basis-1/3 border-t border-gray-400 flex justify-center items-center">
								<AlreadyAnAccount
									message="Ya tienes cuenta?"
									buttonMessage="Inicia sesión"
								/>
							</div>
						</div>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default DialogClientBusiness;
