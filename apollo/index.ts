import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/* Config */
import AppConfig from '../config';

const httpLink = createHttpLink({
	uri: AppConfig.WPGRAPHQL
});

const authLink = setContext((_, { headers }) => {
	const token = '';
	return {
		headers: {
			...headers,
			authorization: `Bearer ${token}`
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

/* Export main Client for querying */
export default client;
