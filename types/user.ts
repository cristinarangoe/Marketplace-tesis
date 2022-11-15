import { BusinessInfo } from './business';

export interface SupabaseAuthUser {
	email: string;
	user_metadata: {
		userType: 'client' | 'business';
	};
}

export interface ClientUser {
	email: string;
	user_metadata: {
		userType: 'client' | 'business';
	};
}

export interface BusinessUser {
	email: string;
	user_metadata: {
		userType: 'client' | 'business';
	};
	businessInfo: BusinessInfo;
}
