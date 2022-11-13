import React, { ReactElement, useState } from 'react';
import Navbar from '../../../../components/Navbar-Navigation/Navbar';
import DialogEditProfile from '../../../../components/UserProfileMarketplace/DialogEditProfile';
import UserProfileCharacteristic from '../../../../components/UserProfileMarketplace/UserProfileCharacteristic';
import VerticalBarUser from '../../../../components/UserProfileMarketplace/VerticalBarUser';
import UserLayout from '../../../../layouts/UserLayout';
import { ClientSchema } from '../../../../types';
import { NextPageWithLayout } from '../../../_app';

const UserProfile: NextPageWithLayout = () => {
	let user: ClientSchema = {
		firstName: 'cristina',
		firstLastName: 'Arango',
		secondLastName: 'Escobar',
		phone: 3217397457,
		email: 'cristinarangoe@hotmail.com',
		IDType: 'CC',
		ID: '1017273163',
		password: '1234',
		confirmPassword: '1234',
	};

	return (
		<div className="flex flex-col">
			<div className="mb-2">
				<h1 className="text-3xl font-bold">Perfil de usuario</h1>
			</div>
			<div className="grid grid-cols-2 w-full">
				<UserProfileCharacteristic
					title="Primer nombre"
					value={user.firstName}
				/>
				{user.secondName ? (
					<UserProfileCharacteristic
						title="Segundo nombre"
						value={user.secondName}
					/>
				) : null}
				<UserProfileCharacteristic
					title="Primer apellido"
					value={user.firstLastName}
				/>
				{user.secondName ? (
					<UserProfileCharacteristic
						title="Segundo apellido"
						value={user.secondLastName}
					/>
				) : null}
				<UserProfileCharacteristic title="Celular" value={user.phone} />
				<UserProfileCharacteristic title="Email" value={user.email} />
				<UserProfileCharacteristic
					title="Tipo de identificación"
					value={user.IDType}
				/>
				<UserProfileCharacteristic
					title="Número de identificación"
					value={user.ID}
				/>
			</div>
			<DialogEditProfile client={user} />
		</div>
	);
};

UserProfile.getLayout = function getLayout(page: ReactElement) {
	return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
