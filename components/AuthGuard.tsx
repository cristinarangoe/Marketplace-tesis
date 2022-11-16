import { useRouter } from 'next/router';
import React, {
	ReactElement,
	experimental_use as use,
	Suspense,
	useEffect,
	useState,
} from 'react';
import { useUserContext } from '../Context/Index';
import { userSignal } from '../signals/userSignal';
import { User } from '../types/user';

interface AuthGuardProps {
	children: ReactElement;
}

export const AuthGuardClient = ({ children }: AuthGuardProps) => {
	const router = useRouter();
	const [user, setUser] = useState<User | undefined>();
	// const { isAuthenticated, userStore } = useUserContext();

	// const userAuthType = userStore?.user_metadata.userType;

	useEffect(() => {
		setUser(userSignal.value);
		if (!userSignal.value) {
			router.push('/');
		}

		if (
			router.asPath.includes('client') &&
			userSignal.value?.user_metadata.userType != 'client'
		) {
			router.push('/');
		}
	}, []);

	return <>{children}</>;
};

export const AuthGuardBusiness = ({ children }: AuthGuardProps) => {
	const router = useRouter();
	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		setUser(userSignal.value);
		if (!userSignal) {
			router.push('/');
		}
		if (
			router.asPath.includes('business') &&
			userSignal.value?.user_metadata.userType != 'business'
		) {
			router.push('/');
		}
	}, []);

	return <>{children}</>;
};
