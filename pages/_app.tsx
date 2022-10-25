import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ContextProductsCart from '../Context/ContextProductsCart';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ContextProductsCart>
				<Component {...pageProps} />
			</ContextProductsCart>
		</>

		// <Component {...pageProps} />
	);
}

export default MyApp;
