import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Utility */
import {
	formatBlogReadTime,
	generateCategoryDisplayName,
	imageLoaderForBlogs
} from '../../../../utils/Blogs';

/* Types */
import { ShowcaseBlogDetails } from '../../../../interfaces/Blogs';

interface Props {
	blogDetails: ShowcaseBlogDetails;
}

const SmallBlogCard: React.FC<Props> = (props) => {
	const {
		blogDetails: { slug, title, featuredImage, categories, readingTime }
	} = props;

	return (
		<article className={styles.smallCard}>
			<Link href={`/blogs/blog/${slug}`} passHref>
				<a>
					<div className={styles.bgImage}>
						<Image
							loader={imageLoaderForBlogs}
							src={featuredImage.node.sourceUrl}
							alt={featuredImage.node.altText}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles.blogText}>
						<h4>{title}</h4>
						<p>
							{generateCategoryDisplayName(categories.nodes)}{' '}
							{formatBlogReadTime(readingTime.readtime)} Min Read
						</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default SmallBlogCard;
