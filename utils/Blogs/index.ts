/* Types */
import { Category } from '../../interfaces/Blogs';

export const fallBackImageURL = `https://wordpress.sellgo-dev.com/wp-content/uploads/
2021/05/dd5ff4_f90c144477bb4bb8b982992680376ca0_mv2.png`;

export const imageLoaderForBlogs = (config: any) => {
	const { src, width, quality } = config;

	return `${src || fallBackImageURL}?w=${width}&q=${quality || 75}`;
};

/* Send back first category name on showcase */
export const generateCategoryDisplayName = (categoriesList: Category[]) => {
	if (!categoriesList.length) {
		return '';
	}
	return categoriesList[0].name === 'Uncategorized'
		? ''
		: `${categoriesList[0].name} |`;
};

/* Format blog read time */
export const formatBlogReadTime = (time: number) => {
	return Math.abs(time);
};
