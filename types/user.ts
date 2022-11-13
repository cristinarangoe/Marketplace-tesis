export interface SupabaseAuthUser {
	email: string;
	user_metadata: {
		userType: 'client' | 'business';
	};
}
