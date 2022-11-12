import React from 'react';
import Navbar from '../../../../components/Navbar-Navigation/Navbar';
import AddressItem from '../../../../components/UserProfileMarketplace/AddressItem';
import DialogAddAddress from '../../../../components/UserProfileMarketplace/DialogAddAddress';
import VerticalBarUser from '../../../../components/UserProfileMarketplace/VerticalBarUser';
import { address } from '../../../../types';

function UserAdresses() {
	let addreses: address[] = [
		{
			state: 'Antioquia',
			city: 'Medellín',
			street: 'Calle 7 sur #23-03',
			floor: 'apto 1304',
			neighbourhood: 'El poblado',
			nameRecipient: 'Cristina Arango Escobar',
		},
		{
			state: 'Antioquia',
			city: 'Medellín',
			street: 'Calle 7 sur #23-03',
			floor: 'apto 1304',
			neighbourhood: 'El poblado',
			nameRecipient: 'Cristina Arango Escobar',
		},
		{
			state: 'Antioquia',
			city: 'Medellín',
			street: 'Calle 7 sur #23-03',
			floor: 'apto 1304',
			neighbourhood: 'El poblado',
			nameRecipient: 'Cristina Arango Escobar',
		},
	];
	return (
		<div>
			<Navbar />
			<div className="flex">
				<VerticalBarUser
					styleUser=""
					styleAdress="border-r-4 border-r-tiffany-green"
					styleOrders=""
				/>
				<div className="w-full px-16 mt-8">
					<div className="flex flex-row justify-between items-center">
						<h2 className="text-3xl font-bold">Direcciones</h2>
						<DialogAddAddress />
					</div>
					<div className="grid grid-cols-3 gap-5 mt-5">
						{addreses.map((address, index) => (
							<AddressItem address={address} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserAdresses;
