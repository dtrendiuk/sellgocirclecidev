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

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {
	seoDetails: any;
	pageContent: any;
}

const PrivacyPage: React.FC<Props> = (props) => {
	const { pageContent, seoDetails } = props;

	return (
		<>
			<SEOHead
				title={seoDetails.title}
				description={seoDetails.metaDesc}
				imageUrl=""
				pageUrl={generatePageURL('/privacy-policy')}
				keywords=""
			/>
			<main className={`page-container ${styles.privacyPage}`}>
				<h1>{pageContent.title}</h1>

				<article
					id="privacy-page"
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
			uri: '/privacy-policy'
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

export default PrivacyPage;
