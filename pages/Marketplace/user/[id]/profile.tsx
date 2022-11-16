import React, { ReactElement, useEffect, useState } from 'react';
import Navbar from '../../../../components/Navbar-Navigation/Navbar';
import DialogEditProfile from '../../../../components/UserProfileMarketplace/DialogEditProfile';
import UserProfileCharacteristic from '../../../../components/UserProfileMarketplace/UserProfileCharacteristic';
import VerticalBarUser from '../../../../components/UserProfileMarketplace/VerticalBarUser';
import UserLayout from '../../../../layouts/UserLayout';
import { userSignal } from '../../../../signals/userSignal';
import { ClientSchema } from '../../../../types';
import { ClientInfo } from '../../../../types/client';
import { NextPageWithLayout } from '../../../_app';

const UserProfile: NextPageWithLayout = () => {
	const [user, setUser] = useState<ClientInfo | undefined>();
	useEffect(() => {
		setUser(userSignal.value?.data as ClientInfo);
	}, []);

	if (user == undefined) return <p>hola</p>;
	return (
		<div className="flex flex-col">
			<div className="mb-2">
				<h1 className="text-3xl font-bold">Perfil de usuario</h1>
			</div>
			<div className="grid grid-cols-2 w-full">
				{user.firstName ? (
					<UserProfileCharacteristic
						title="Primer nombre"
						value={user.firstName}
					/>
				) : null}
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
