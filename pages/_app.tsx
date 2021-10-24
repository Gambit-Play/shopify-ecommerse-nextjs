import { AppProps } from 'next/app';

import { UIProvider } from '@components/ui/context';

import '@assets/main.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UIProvider>
			<Component {...pageProps} />
		</UIProvider>
	);
}

export default MyApp;
