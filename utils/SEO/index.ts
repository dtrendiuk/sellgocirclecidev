import AppConfig from '../../config';

/* Utility to page URL from slugs */
export const generatePageURL = (slug: string) => {
	return `${AppConfig.WEB_URL}${slug}`;
};
