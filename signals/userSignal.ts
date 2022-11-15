'use client';
import { ClientUser, SupabaseAuthUser, BusinessUser } from './../types/user';
import { effect, signal } from '@preact/signals-react';
import { BusinessInfo } from '../types/business';

export const userSignal = signal<ClientUser | BusinessUser | undefined>(
	undefined
);

export const setUserSession = (user: ClientUser | BusinessUser) => {
	userSignal.value = user;
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
