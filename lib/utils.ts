export default async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const res = await fetch(input, init);
	return res.json();
}

export const URL_IMAGES = "https://pub-519dfc423646485c8e75fc48e6df6ae7.r2.dev"
