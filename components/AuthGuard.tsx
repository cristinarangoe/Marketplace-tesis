import { useRouter } from 'next/router';
import React, {
	ReactElement,
	experimental_use as use,
	Suspense,
	useEffect,
} from 'react';
import { useUserContext } from '../Context/Index';
import { userSignal } from '../signals/userSignal';

interface AuthGuardProps {
	children: ReactElement;
}

export const AuthGuardClient = ({ children }: AuthGuardProps) => {
	const router = useRouter();
	// const { isAuthenticated, userStore } = useUserContext();

	// const userAuthType = userStore?.user_metadata.userType;

	useEffect(() => {
		if (!userSignal.value) {
			router.push('/');
		}

		if (
			router.asPath.includes('client') &&
			userSignal.value?.user_metadata.userType != 'client'
		) {
			router.push('/');
		}
	}, [userSignal.value]);

	return <>{children}</>;
};

export const AuthGuardBusiness = ({ children }: AuthGuardProps) => {
	const router = useRouter();

	useEffect(() => {
		if (!userSignal) {
			router.push('/');
		}
		if (
			router.asPath.includes('business') &&
			userSignal.value?.user_metadata.userType != 'business'
		) {
			router.push('/');
		}
	}, [userSignal.value]);

	return <>{children}</>;
};
