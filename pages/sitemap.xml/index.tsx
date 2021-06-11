import React from 'react';
import { GetServerSideProps } from 'next';

/* Apollo */
import client from '../../apollo';

/* Graphql */
import {
	GET_BLOGS_DATA_FOR_SITEMAP,
	GET_TOTAL_BLOGS_COUNT
} from '../../graphql/cms';

/* App Config */
import AppConfig from '../../config';

/* Utils */
import { getPageFrequency, getPagePriority } from '../../utils/Sitemap';

interface Props {}

const Sitemap: React.FC<Props> = () => {
	return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// generate sitenmap for static pages first

	const staticPages = [
		'pages/index.tsx',
		'pages/about-us/index.tsx',
		'pages/blogs/index.tsx',
		'pages/contact/index.tsx',
		'pages/demo/index.tsx',
		'pages/contact-sales/index.tsx',
		'pages/extension/index.tsx',
		'pages/leads-tracker/index.tsx',
		'pages/pricing/index.tsx',
		'pages/privacy-policy/index.tsx',
		'pages/product-tracker/index.tsx',
		'pages/profit-finder/index.tsx',
		'pages/search-management/index.tsx',
		'pages/seller-finder/index.tsx',
		'pages/terms-of-use/index.tsx',
		'pages/blogs/paginated/index.tsx'
	];

	const staticPagesSitemap = `${staticPages
		.map((page) => {
			const path = page
				.replace('pages', '')
				.replace('.tsx', '')
				.replace(/\/index/g, '');

			const routePath = path === 'index' ? '' : path;

			return `<url>
            <loc>${AppConfig.WEB_URL}${routePath}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
						<changefreq>${getPageFrequency(routePath)}</changefreq>
						<priority>${getPagePriority(routePath)}</priority>
          </url>`;
		})
		.join('')}`;

	// Generate the sitemap for dynamic pages (blogs/blog/[slug])

	const { data: totalBlogsCount } = await client.query({
		query: GET_TOTAL_BLOGS_COUNT
	});

	const totalCount = totalBlogsCount.posts.pageInfo.total;

	const { data: getBlogsSiteMapInfo } = await client.query({
		query: GET_BLOGS_DATA_FOR_SITEMAP,
		variables: { size: totalCount }
	});

	const sitemapInfo = getBlogsSiteMapInfo.posts.nodes;

	const blogsSitemap = `${sitemapInfo
		.map((blogSitemapData: any) => {
			return `<url>
            <loc>${AppConfig.WEB_URL}/blogs/blog/${blogSitemapData.slug}</loc>
            <lastmod>${new Date(blogSitemapData.date).toISOString()}</lastmod>
          </url>`;
		})
		.join('')}`;

	// combine the sitemaps
	const staticPageGeneratedSitemap = `
	
    	<urlset
      	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
				http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    	>
      ${staticPagesSitemap}
			${blogsSitemap}
    </urlset>
  `;
	// send xml response and end the request
	res.setHeader('Content-Type', 'text/xml');
	res.write(staticPageGeneratedSitemap);
	res.end();

	return {
		props: {}
	};
};

export default Sitemap;
