import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Apollo */
import client from '../../apollo';

/* GraphQL */
import { GET_FILTERED_BLOGS, GET_SHOW_CASE_BLOGS } from '../../graphql/cms';

/* Containers */
import ShowCaseHeroBox from '../../containers/Blogs/ShowCaseHerobox';
import BlogsShowCaseSection from '../../containers/Blogs/BlogsShowCaseSection';

/* Components */
import SEOHead from '../../components/SEOHead';
import LeftArrow from '../../components/Icons/Chervons/Left';
import RightArrow from '../../components/Icons/Chervons/Right';
import ReCaptchNewsLetter from '../../components/ReCaptchaNewsLetter';

/* Data */
import { seoData } from '../../data/SEO/blogsShowcase';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {
	showcaseBlogs: any;
	editorsChoiceBlogs: any;
	popularChoiceBlogs: any;
	totalPages: {
		total: number;
	};
}

const BlogsPage: React.FC<Props> = (props) => {
	const {
		showcaseBlogs,
		popularChoiceBlogs,
		editorsChoiceBlogs,
		totalPages
	} = props;

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const router = useRouter();

	const handlePageChange = (data: { selected: number }) => {
		const selectedPageNumber = data.selected + 1;

		if (selectedPageNumber === 1) {
			return;
		}

		router.push({
			pathname: '/blogs/paginated',
			query: { page: selectedPageNumber }
		});
	};

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<ShowCaseHeroBox />
			<main className={`page-container ${styles.blogsPage}`}>
				{/* Blogs Showcase */}
				<BlogsShowCaseSection
					showcaseBlogs={showcaseBlogs}
					popularChoiceBlogs={popularChoiceBlogs}
					editorsChoiceBlogs={editorsChoiceBlogs}
					openNewsletterModal={() => setIsOpen(true)}
				/>

				<ReactPaginate
					pageCount={Math.round(totalPages.total / 6)}
					pageRangeDisplayed={3}
					marginPagesDisplayed={1}
					previousLabel={<LeftArrow width={10} height={16} fill="#808080" />}
					nextLabel={<RightArrow width={10} height={16} fill="#808080" />}
					activeClassName="active"
					containerClassName="pagination"
					onPageChange={handlePageChange}
					initialPage={0}
				/>
				<div className={styles.divider} />

				<section className={styles.banner}>
					<div className={styles.banner__left}>
						<h3>Subscribe to Our Newsletter</h3>
						<p>
							Join our subscriber&apos;s list to get the latest update and
							articles delivered directly to your inbox.
						</p>
					</div>

					<div className={styles.banner__right}>
						<button onClick={() => setIsOpen(true)}>Subscribe</button>
					</div>
				</section>
			</main>

			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<ReCaptchNewsLetter closeModal={() => setIsOpen(false)} />
			</Modal>

			{/* Mount all page modal */}
			<div id="newsLetterMount"></div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const showCaseBlogsResponse = await client.query({
		query: GET_SHOW_CASE_BLOGS,
		variables: { count: 10 }
	});

	const editorsChoiceBlogsResponse = await client.query({
		query: GET_FILTERED_BLOGS,
		variables: {
			value: 'Editors Choice'
		}
	});

	const popularChoiceBlogsResponse = await client.query({
		query: GET_FILTERED_BLOGS,
		variables: {
			value: 'Popular Choice'
		}
	});

	const showcaseBlogs = showCaseBlogsResponse.data.posts.nodes;
	const totalPages = showCaseBlogsResponse.data.posts.pageInfo;
	const editorsChoiceBlogs = editorsChoiceBlogsResponse.data.posts.nodes;
	const popularChoiceBlogs = popularChoiceBlogsResponse.data.posts.nodes;

	return {
		props: {
			showcaseBlogs,
			editorsChoiceBlogs,
			popularChoiceBlogs,
			totalPages
		},
		revalidate: 1
	};
};

export default BlogsPage;
