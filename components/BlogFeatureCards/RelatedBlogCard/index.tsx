import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Utility */
import {
	fallBackImageURL,
	formatBlogReadTime,
	generateCategoryDisplayName,
	imageLoaderForBlogs
} from '../../../utils/Blogs';

/* Types */
import {
	Categories,
	FeaturedImage,
	ReadingTime
} from '../../../interfaces/Blogs';

interface Props {
	title: string;
	slug: string;
	featuredImage: FeaturedImage;
	categories: Categories;
	readingTime: ReadingTime;
}

const RelatedBlogCard: React.FC<Props> = (props) => {
	const { title, slug, categories, featuredImage, readingTime } = props;

	return (
		<article className={styles.relatedBlogCard}>
			<Link href={`/blogs/blog/${slug}`} passHref>
				<a>
					<div className={styles.bgImage}>
						<Image
							loader={imageLoaderForBlogs}
							src={featuredImage?.node?.sourceUrl || fallBackImageURL}
							alt={featuredImage?.node?.altText || ''}
							layout="fill"
							objectFit="cover"
						/>
					</div>

					<div className={styles.blogText}>
						<h2>{title}</h2>
						<p>
							{generateCategoryDisplayName(categories.nodes)}{' '}
							{formatBlogReadTime(readingTime.readtime)} mins read
						</p>
					</div>
				</a>
			</Link>
		</article>
	);
};

export default RelatedBlogCard;
