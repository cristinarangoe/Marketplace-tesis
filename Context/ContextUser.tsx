import { useRouter } from 'next/router';
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { SupabaseAuthUser } from '../types/user';

interface ContextProps {
	userStore: SupabaseAuthUser | undefined;
	isAuthenticatedProp: boolean | undefined;
	saveSession: (user: SupabaseAuthUser) => void;
	logout: () => void;
}

export const UserContext = React.createContext<ContextProps>({
	userStore: undefined,
	isAuthenticatedProp: undefined,
	saveSession: () => {},
	logout: () => {},
});

export default function ContextUser({ children }: { children: ReactElement }) {
	const [user, setUser] = useState<SupabaseAuthUser>();
	const [isAuthenticated, setAuthenticatedStatus] = useState<
		boolean | undefined
	>();
	const router = useRouter();

	//function to logoutUser
	function logout() {
		setUser(() => undefined);
		setAuthenticatedStatus(false);
		router.push('/');
	}

	function saveSession(u: SupabaseAuthUser) {
		setUser(u);
		setAuthenticatedStatus(true);
	}

	return (
		<UserContext.Provider
			value={{
				isAuthenticatedProp: isAuthenticated,
				logout: logout,
				saveSession: saveSession,
				userStore: user,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
