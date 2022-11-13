import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { SupabaseAuthUser } from '../types/user';

interface ContextProps {
	userStore: SupabaseAuthUser | undefined;
	isAuthenticated: boolean;
	saveSession: (user: SupabaseAuthUser) => void;
	logout: () => void;
}

export const UserContext = React.createContext<ContextProps>({
	userStore: undefined,
	isAuthenticated: false,
	saveSession: () => {},
	logout: () => {},
});

export default function ContextUser({ children }: { children: ReactElement }) {
	const [user, setUser] = useState<SupabaseAuthUser>();
	const [isAuthenticated, setAuthenticatedStatus] = useState(false);

	//function to logoutUser
	function logout() {
		setUser(() => undefined);
		setAuthenticatedStatus(false);
	}

	function saveSession(u: SupabaseAuthUser) {
		setUser(u);
		setAuthenticatedStatus(true);
	}

	return (
		<UserContext.Provider
			value={{
				isAuthenticated,
				logout,
				saveSession,
				userStore: user,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
