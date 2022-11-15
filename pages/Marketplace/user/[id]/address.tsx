import React, { ReactElement } from 'react';
import Navbar from '../../../../components/Navbar-Navigation/Navbar';
import AddressItem from '../../../../components/UserProfileMarketplace/AddressItem';
import DialogAddAddress from '../../../../components/UserProfileMarketplace/DialogAddAddress';
import VerticalBarUser from '../../../../components/UserProfileMarketplace/VerticalBarUser';
import UserLayout from '../../../../layouts/UserLayout';
import { address } from '../../../../types';
import { NextPageWithLayout } from '../../../_app';

const UserAdresses: NextPageWithLayout = () => {
	// let addreses: address[] = [
	// 	{
	// 		state: 'Antioquia',
	// 		city: 'Medellín',
	// 		street: 'Calle 7 sur #23-03',
	// 		floor: 'apto 1304',
	// 		neighbourhood: 'El poblado',
	// 		nameRecipient: 'Cristina Arango Escobar',
	// 	},
	// 	{
	// 		state: 'Antioquia',
	// 		city: 'Medellín',
	// 		street: 'Calle 7 sur #23-03',
	// 		floor: 'apto 1304',
	// 		neighbourhood: 'El poblado',
	// 		nameRecipient: 'Cristina Arango Escobar',
	// 	},
	// 	{
	// 		state: 'Antioquia',
	// 		city: 'Medellín',
	// 		street: 'Calle 7 sur #23-03',
	// 		floor: 'apto 1304',
	// 		neighbourhood: 'El poblado',
	// 		nameRecipient: 'Cristina Arango Escobar',
	// 	},
	// ];
	const address: address[] = [];
	return (
		<>
			<div className="flex flex-row justify-between items-center">
				<h2 className="text-3xl font-bold">Direcciones</h2>
				<DialogAddAddress />
			</div>
			<div className="grid grid-cols-3 gap-5 mt-5">
				{address.length > 0 ? (
					address.map((address, index) => (
						<AddressItem address={address} key={index} />
					))
				) : (
					<p>no ha definido su direccion</p>
				)}
			</div>
		</>
	);
};

UserAdresses.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
};

export default UserAdresses;
