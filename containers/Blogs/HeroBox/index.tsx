import React from 'react';
import Image from 'next/image';

/* Styles */
import styles from './index.module.scss';

/* Utils */
import { fallBackImageURL, imageLoaderForBlogs } from '../../../utils/Blogs';

/* Types */
import { FeaturedImage, Author } from '../../../interfaces/Blogs';

interface Props {
	title: string;
	author: Author;
	shortSummary: string;
	featuredImage: FeaturedImage;
}

const HeroBox: React.FC<Props> = (props) => {
	const { title, author, shortSummary, featuredImage } = props;

	return (
		<section className={styles.heroboxWrapper}>
			<div className={`${styles.herobox}`}>
				<div className={styles.herobox__Left}>
					<div className={`page-container ${styles.contentWrapper}`}>
						<h1>{title}</h1>
						<p>
							Written by{' '}
							<span>
								{author.firstName} {author.lastName}
							</span>
						</p>
						<div
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: shortSummary }}
							className={styles.summary}
						></div>
					</div>
				</div>

				<div className={styles.herobox__Right}>
					<Image
						loader={imageLoaderForBlogs}
						src={featuredImage?.node?.sourceUrl || fallBackImageURL}
						alt={featuredImage?.node?.altText || ''}
						width={featuredImage?.node?.mediaDetails?.width || 600}
						height={featuredImage?.node?.mediaDetails?.height || 400}
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroBox;
