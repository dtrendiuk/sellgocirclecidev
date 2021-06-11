import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Types */
import { ShowcaseBlogDetails } from '../../../interfaces/Blogs';

/* Utils */
import {
	fallBackImageURL,
	formatBlogReadTime,
	generateCategoryDisplayName,
	imageLoaderForBlogs
} from '../../../utils/Blogs';

interface Props {
	showcaseBlogDetails: ShowcaseBlogDetails;
}

const BigFeatureCard: React.FC<Props> = (props) => {
	const { showcaseBlogDetails } = props;

	if (!showcaseBlogDetails) {
		return null;
	}

	const {
		featuredImage,
		slug,
		title,
		categories,
		readingTime
	} = showcaseBlogDetails;

	return (
		<Link href={`/blogs/blog/${slug}`} passHref>
			<a>
				<article className={styles.bigFeatureCard}>
					<div className={styles.bgImage}>
						<Image
							loader={imageLoaderForBlogs}
							src={featuredImage?.node?.sourceUrl || fallBackImageURL}
							alt={featuredImage?.node?.altText}
							layout="fill"
							objectFit="cover"
							priority
						/>
					</div>
					<div className={styles.blogText}>
						<h1>{title}</h1>
						<p>
							{generateCategoryDisplayName(categories.nodes)}{' '}
							{formatBlogReadTime(readingTime.readtime)} Min Read
						</p>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default memo(BigFeatureCard);
