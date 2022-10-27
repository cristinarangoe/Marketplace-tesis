import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jyhbayqgzwrxaglsyrop.supabase.co';
const PUBLIC_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aGJheXFnendyeGFnbHN5cm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYyMjIzODUsImV4cCI6MTk4MTc5ODM4NX0.1FhwmmaqDIEWtW5q-gm77TtOy9SdrH2A6ldaGxsUf7k';

const supabase = createClient(SUPABASE_URL, PUBLIC_KEY);

export async function authUser({
	email,
	password,
}: {
	email: string;
	password: string;
}) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw error;

	return data;
}
