import { ClientInfo } from './client';
import { BusinessInfo } from './business';

export interface SupabaseAuthUser {
	email: string;
	user_metadata: {
		userType: 'client' | 'business';
	};
}

export interface User {
	email: string;
	user_metadata: {
		userType: 'client' | 'business';
	};
	data: ClientInfo | BusinessInfo;
}
