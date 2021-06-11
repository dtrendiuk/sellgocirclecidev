import type { AppProps /* AppContext */ } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/* Styling */
import '../styles/globals.scss';

/* Apollo Client */
import client from '../apollo';

/* Components */
import Layout from '../components/Layout';
import analytics from '../analytics';

/* Utils */
import { generatePageURL } from '../utils/SEO';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const { asPath } = router;

	useEffect(() => {
		// track only on production and window based environment
		if (
			process.env.NODE_ENV === 'production' &&
			typeof window !== 'undefined'
		) {
			analytics.page({
				url: generatePageURL(asPath),
				title: window.document.title,
				path: asPath
			});
		}
	}, [asPath]);

	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
