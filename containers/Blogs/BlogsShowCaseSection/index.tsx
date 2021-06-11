import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import BigFeatureCard from '../../../components/BlogFeatureCards/BigFeatureCard';
import SmallFeatureCard from '../../../components/BlogFeatureCards/SmallFeatureCard';
import FilteredChoiceBlogs from '../../../components/FilteredBlogs';

interface Props {
	showcaseBlogs: any;
	popularChoiceBlogs: any;
	editorsChoiceBlogs: any;
	openNewsletterModal: () => void;
}

const BlogsShowCaseSection: React.FC<Props> = (props) => {
	const {
		showcaseBlogs,
		popularChoiceBlogs,
		editorsChoiceBlogs,
		openNewsletterModal
	} = props;

	return (
		<>
			{/* Hero Section */}
			<section className={styles.blogsHeroSection}>
				<div className={styles.blogsHeroSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[0]} />
				</div>

				<aside className={styles.blogsHeroSection__Right}>
					<FilteredChoiceBlogs
						label="Popular Blogs"
						blogs={popularChoiceBlogs}
					/>
					<FilteredChoiceBlogs
						label="Editors Choice"
						blogs={editorsChoiceBlogs}
					/>
				</aside>
			</section>

			{/* Recommeded Section : Change name later */}
			<section className={styles.recommededSection}>
				<div className={styles.recommededSection__Left}>
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[1]} />
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[2]} />
				</div>
				<aside className={styles.recommededSection__Right}>
					<div className={styles.message}>
						<h3>Go Sell With Sellgo</h3>
					</div>
				</aside>
			</section>

			{/* Other Blogs Section: Change name later */}
			<section className={styles.otherBlogsSection}>
				<div className={styles.otherBlogsSection__Left}>
					<div className={styles.newsLetter}>
						<div className={styles.newsLetterContentWrapper}>
							<h3>Subscribe via Email</h3>
							<div className={styles.newsLetterContentWrapper__underline} />
							<p>
								We&apos;re committed to your privacy. Sellgo uses the
								information you provide to us to contact you about our relevant
								content, products, and services. You may unsubscribe from these
								communications at any time. For more information, check out our
								<Link href="/privacy-policy">
									<a>privacy policy.</a>
								</Link>
							</p>

							<button onClick={openNewsletterModal}>Subscribe</button>
						</div>
					</div>
				</div>
				<aside className={styles.otherBlogsSection__Right}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[3]} />
				</aside>
			</section>

			{/* Last Blogs Section : Change name later */}
			<section className={styles.lastBlogsSection}>
				<div className={styles.lastBlogsSection__Left}>
					<BigFeatureCard showcaseBlogDetails={showcaseBlogs[4]} />
				</div>
				<aside className={styles.lastBlogsSection__Right}>
					<SmallFeatureCard showcaseBlogDetails={showcaseBlogs[5]} />
				</aside>
			</section>
		</>
	);
};

export default BlogsShowCaseSection;
