import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../../containers/Blogs/HeroBox';
import ShareBlogSection from '../../../containers/Blogs/ShareBlogSection';
import RelatedBlogsSection from '../../../containers/Blogs/RelatedBlogsSection';

/* Components */
import SEOHead from '../../../components/SEOHead';

/* App Config */
import AppConfig from '../../../config';

/* Apollo */
import client from '../../../apollo';

/* GraphQL */
import { GET_ALL_SLUGS, GET_BLOG_BY_SLUG } from '../../../graphql/cms';

/* Types */
import {
	FeaturedImage,
	Author,
	ShowcaseBlogDetails
} from '../../../interfaces/Blogs';

interface Props {
	author: Author;
	seo: any;
	content: string;
	title: string;
	slug: string;
	featuredImage: FeaturedImage;
	shortSummary: string;
	keywords: string;
	relatedBlogs: ShowcaseBlogDetails[];
}

const BlogPage: React.FC<Props> = (props) => {
	const {
		seo,
		content,
		slug,
		featuredImage,
		title,
		author,
		shortSummary,
		keywords,
		relatedBlogs
	} = props;

	return (
		<>
			<SEOHead
				title={seo.title || 'Blog | Sellgo'}
				description={seo.metaDesc}
				imageUrl={featuredImage?.node?.sourceUrl || ''}
				pageUrl={`${AppConfig.WEB_URL}/blogs/blog/${slug}`}
				keywords={keywords || ''}
			/>
			<HeroBox
				title={title}
				author={author}
				shortSummary={shortSummary}
				featuredImage={featuredImage}
			/>
			<main className={`page-container ${styles.blogsPage}`}>
				<article
					className={`blog-content-container ${styles.blog}`}
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</main>
			<ShareBlogSection
				pageUrl={`${AppConfig.WEB_URL}/blogs/blog/${slug}`}
				title={title}
			/>
			<RelatedBlogsSection relatedBlogs={relatedBlogs} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await client.query({
		query: GET_ALL_SLUGS
	});

	const blogPaths = response.data.posts.nodes.map((nodeValue: any) => ({
		params: { slug: nodeValue.slug }
	}));

	return {
		paths: blogPaths,
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const response = await client.query({
		query: GET_BLOG_BY_SLUG,
		variables: {
			slug: params?.slug
		}
	});

	const {
		author,
		title,
		content,
		seo,
		slug,
		featuredImage,
		excerpt,
		seoMetaTags,
		relatedPosts
	} = response.data.postBy;

	return {
		props: {
			author: author.node,
			title,
			content,
			seo,
			slug,
			featuredImage,
			shortSummary: excerpt,
			keywords: seoMetaTags.keywords,
			relatedBlogs: relatedPosts.nodes
		},
		revalidate: 1
	};
};
export default BlogPage;
