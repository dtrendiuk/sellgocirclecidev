import React, { memo } from 'react';
import Head from 'next/head';

interface Props {
	title: string;
	description: string;
	imageUrl: string;
	pageUrl: string;
	keywords: string;
}

const SEOHead: React.FC<Props> = (props) => {
	const { title, description, imageUrl, pageUrl, keywords } = props;
	return (
		<Head>
			<meta httpEquiv="content-language" content="en-us" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="robots" content="index,follow" />
			<meta name="googlebot" content="index,follow" />

			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="canonical" href="https://www.sellgo.com" />

			{/* Open Graph/Faecbook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={pageUrl} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			{/* Twitter cards */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={pageUrl} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={imageUrl} />
		</Head>
	);
};

export default memo(SEOHead);
