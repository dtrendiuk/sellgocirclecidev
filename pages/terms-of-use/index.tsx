import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../apollo';

/* GraphQL Queries */
import { GET_PAGE_BY_URI } from '../../graphql/cms/index';

/* Components */
import SEOHead from '../../components/SEOHead';
import { generatePageURL } from '../../utils/SEO';

interface Props {
	seoDetails: any;
	pageContent: any;
}

const TermOfUse: React.FC<Props> = (props) => {
	const { pageContent, seoDetails } = props;

	return (
		<>
			<SEOHead
				title={seoDetails.title}
				description={seoDetails.metaDesc}
				imageUrl=""
				keywords=""
				pageUrl={generatePageURL('/terms-of-use')}
			/>
			<main className={`page-container ${styles.termsPage}`}>
				<h1>{pageContent.title}</h1>
				<article
					id="terms-page"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: pageContent.content }}
				></article>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({
		query: GET_PAGE_BY_URI,
		variables: {
			uri: '/terms-of-use/'
		}
	});

	const { seo, ...otherPageDetails } = response.data.pageBy;

	return {
		props: {
			seoDetails: seo,
			pageContent: otherPageDetails
		},
		revalidate: 1
	};
};

export default TermOfUse;
