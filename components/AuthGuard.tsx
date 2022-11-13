import { useRouter } from 'next/router';
import React, {
	ReactElement,
	experimental_use as use,
	Suspense,
	useEffect,
} from 'react';
import { useUserContext } from '../Context/Index';

interface AuthGuardProps {
	children: ReactElement;
}

export const AuthGuardClient = ({ children }: AuthGuardProps) => {
	const router = useRouter();
	const { isAuthenticated, userStore } = useUserContext();

	const userAuthType = userStore?.user_metadata.userType;

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/');
		}

		if (
			router.asPath.includes('client') &&
			userStore?.user_metadata.userType != 'client'
		) {
			router.push('/');
		}
	}, []);

	return <>{children}</>;
};

export const AuthGuardBusiness = ({ children }: AuthGuardProps) => {
	const router = useRouter();
	const { isAuthenticated, userStore } = useUserContext();

	const userAuthType = userStore?.user_metadata.userType;

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/');
		}
		if (
			router.asPath.includes('business') &&
			userStore?.user_metadata.userType != 'business'
		) {
			router.push('/');
		}
	}, []);

	return <>{children}</>;
};
