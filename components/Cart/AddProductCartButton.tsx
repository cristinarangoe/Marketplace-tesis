import React, { useState } from 'react';
import * as Toast from '@radix-ui/react-toast';

function AddProductCartButton({ onPress }: { onPress: () => void }) {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<div className="">
				<Toast.Provider swipeDirection="right">
					<button
						className="bg-medium-violet p-2 rounded"
						onClick={() => {
							setOpen(false);
							onPress();
							setOpen(true);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="white"
						>
							<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
						</svg>
					</button>
					<Toast.Root
						open={open}
						onOpenChange={setOpen}
						className="flex bg-white font-medium text-xl  shadow-lg p-5 items-center border-l-4 border-l-dazzle-rose"
					>
						<Toast.Title className="flex flex-row text-xl font-bold text-black">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="pink"
								className="w-6 h-6 stroke-dazzle-rose stroke-"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span className="pl-3">Producto adicionado </span>
						</Toast.Title>
					</Toast.Root>

					<Toast.Viewport className="fixed bottom-0 right-0 flex flex-col padding-5 mb-5 mr-5" />
				</Toast.Provider>
			</div>
		</div>
	);
}

export default AddProductCartButton;
