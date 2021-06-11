import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CategoryBlogCard from '../../../components/BlogFeatureCards/CategoryBlogCard';

interface Props {
	relatedBlogs: any;
}

const BlogsCategorySection: React.FC<Props> = (props) => {
	const { relatedBlogs } = props;

	return (
		<section className={styles.blogsCategorySection}>
			<h2 className="secondary-heading">Related Blog&apos;s</h2>
			<div className={styles.categoryBlogsWrapper}>
				<CategoryBlogCard relatedBlogsDetails={relatedBlogs[0] || null} />
				<CategoryBlogCard relatedBlogsDetails={relatedBlogs[1] || null} />
				<CategoryBlogCard relatedBlogsDetails={relatedBlogs[2] || null} />
				<CategoryBlogCard relatedBlogsDetails={relatedBlogs[3] || null} />
			</div>
		</section>
	);
};

export default BlogsCategorySection;
