import React from 'react';
import { GetStaticProps } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../apollo';

/* GraphQL */
import { GET_SHOW_CASE_BLOGS } from '../graphql/cms';

/* Containers */
import HeroBox from '../containers/HomePage/HeroBox';
import ProductsSection from '../containers/HomePage/ProductsSection';
import TestimonialsSection from '../containers/HomePage/TestimonialsSection';
import RecentBlogsSection from '../containers/HomePage/RecentBlogsSection';
import ClosingCTASection from '../containers/HomePage/ClosingCTASection';

/* Components */
import SEOHead from '../components/SEOHead';

/* Data */
import { seoData } from '../data/SEO/home';

/* Utils */
import { generatePageURL } from '../utils/SEO';

/* Types */
import { ShowcaseBlogDetails } from '../interfaces/Blogs';

interface Props {
	homeBlogs: ShowcaseBlogDetails[];
}

const HomePage: React.FC<Props> = (props) => {
	const { homeBlogs } = props;
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox />
			<main>
				<section className={styles.opportunityBanner}>
					<h2 className="secondary-heading">
						The Amazon Opportunity Finder Your Business Will Love
					</h2>
				</section>
				<ProductsSection />
				<TestimonialsSection />

				<div className={styles.divider}></div>

				<RecentBlogsSection recentBlogs={homeBlogs} />
				<div className={styles.divider}></div>

				<ClosingCTASection />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await client.query({
		query: GET_SHOW_CASE_BLOGS,
		variables: {
			count: 12
		}
	});

	const blogsForHome = response.data.posts.nodes;

	return {
		props: {
			homeBlogs: blogsForHome
		},
		revalidate: 1
	};
};

export default HomePage;
