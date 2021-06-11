import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styles */
import styles from './index.module.scss';

/* Utils */
import { imageLoaderForBlogs } from '../../../utils/Blogs';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';

interface Props {
	relatedBlogsDetails: ShowcaseBlogDetails | null;
}

const CategoryBlogCard: React.FC<Props> = (props) => {
	const { relatedBlogsDetails } = props;

	// return empty if no details found
	if (!relatedBlogsDetails) {
		return null;
	}

	return (
		<article className={styles.categoryBlogCard}>
			<Link href={`/blogs/blog/${relatedBlogsDetails.slug}`} passHref>
				<a>
					<div className={styles.categoryBlogCard__Image}>
						<Image
							loader={imageLoaderForBlogs}
							src={relatedBlogsDetails.featuredImage.node.sourceUrl}
							alt={relatedBlogsDetails.featuredImage.node.altText}
							layout="fill"
							objectFit="cover"
						/>
					</div>

					<div className={styles.categoryBlogCard__Text}>
						<p>{relatedBlogsDetails.title}</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default CategoryBlogCard;
