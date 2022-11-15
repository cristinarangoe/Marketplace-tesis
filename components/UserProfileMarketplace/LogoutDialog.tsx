import React, { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useUserContext } from '../../Context/Index';
import { logout } from '../../signals/userSignal';

export const LogoutDialog = () => {
	const [open, setOpen] = useState(false);
	// const { logout } = useUserContext();
	return (
		<AlertDialog.Root open={open} onOpenChange={setOpen}>
			<AlertDialog.Trigger>
				<button>
					<div className="flex flex-row mt-6 cursor-pointer">
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
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
							/>
						</svg>

						<h3 className="pl-3">Cerrar sesión</h3>
					</div>
				</button>
				<AlertDialog.Overlay>
					<div className="h-screen w-screen bg-black/10 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"></div>
					<AlertDialog.Content className="bg-white rounded-md shadow-lg fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-2/6 p-5">
						<AlertDialog.Title className="text-xl font-medium mt-3">
							Estás seguro que deseas cerrar sesión?
						</AlertDialog.Title>
						<div className="my-3 ">
							<AlertDialog.Cancel>
								<button
									className="bg-medium-violet text-white px-5 py-2 rounded-md  border-2 border-medium-violet mr-5"
									onClick={() => setOpen(false)}
								>
									Cancelar
								</button>
							</AlertDialog.Cancel>
							<AlertDialog.Action>
								<button
									className="bg-red-500 text-white px-5 py-2 rounded-md border-2 border-red-500"
									onClick={logout}
								>
									Si, cerrar sesión
								</button>
							</AlertDialog.Action>
						</div>
					</AlertDialog.Content>
				</AlertDialog.Overlay>
			</AlertDialog.Trigger>
		</AlertDialog.Root>
	);
};
