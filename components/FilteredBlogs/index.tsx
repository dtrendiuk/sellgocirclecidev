import React, { memo } from 'react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';
import {
	formatBlogReadTime,
	generateCategoryDisplayName
} from '../../utils/Blogs';

/* Types */
import { FilteredBlog } from '../../interfaces/Blogs';

interface Props {
	label: string;
	blogs: FilteredBlog[];
}

const FilteredChoiceBlogs: React.FC<Props> = (props) => {
	const { label, blogs } = props;

	return (
		<div className={styles.filteredBlogs}>
			<div className={styles.filterBlogLabel}>
				<p>{label}</p>
			</div>

			{blogs.map((blog: FilteredBlog) => {
				return (
					<div className={styles.blogTeaser} key={uuid()}>
						<Link passHref href={`/blogs/blog/${blog.slug}`}>
							<a>
								<p>{blog.title}</p>
							</a>
						</Link>
						<small>
							<strong>
								{generateCategoryDisplayName(blog.categories.nodes)}{' '}
								{formatBlogReadTime(blog.readingTime.readtime)} Min Read
							</strong>
						</small>
					</div>
				);
			})}
		</div>
	);
};

export default memo(FilteredChoiceBlogs);
