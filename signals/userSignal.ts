'use client';
import { ClientUser, SupabaseAuthUser, BusinessUser } from './../types/user';
import { effect, signal } from '@preact/signals-react';
import { BusinessInfo } from '../types/business';
import { getBusinessInfo } from '../lib/business';
import { getClientInfo } from '../lib/client';

export const userSignal = signal<ClientUser | BusinessUser | undefined>(
	undefined
);

export const setUserSession = async (user: SupabaseAuthUser) => {
	let tmp;
	if (user.user_metadata.userType === 'business') {
		const businessInfo = await getBusinessInfo(user.email!);
		tmp = {
			...user,
			businessInfo,
		};
	}

	if (user.user_metadata.userType === 'client') {
		const clientInfo = await getClientInfo(user.email);
		console.log(clientInfo);
		tmp = {
			...user,
			clientInfo,
		};
	}
	userSignal.value = tmp;
};

const dispose = effect(() => {
	if (typeof window !== 'undefined') {
		console.log('ahi vamo');
		if (userSignal.value == undefined) {
			const tmp = localStorage.getItem('userSession');
			if (tmp) {
				userSignal.value = JSON.parse(tmp);
				return;
			}
		} else {
			localStorage.setItem('userSession', JSON.stringify(userSignal.value));
		}
	}
});

export const logout = () => {
	dispose();
	userSignal.value = undefined;
	localStorage.removeItem('userSession');
};
