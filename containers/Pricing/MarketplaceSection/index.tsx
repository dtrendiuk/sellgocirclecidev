import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const MarketplaceSection: React.FC<Props> = () => {
	return (
		<section className={`big-page-container ${styles.marketplaceSection}`}>
			<h2>Apps marketplace</h2>
			<h3>Lorem Ipsum</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud
			</p>

			<CTAButton
				type="primary"
				size="small"
				navigateTo="/"
				className={styles.marketplaceCTA}
			>
				<span>Lorem Ipsum</span>
				<Image
					src="/externalLinkWhite.svg"
					alt="Move to the marketplace CTA URL"
					width={12}
					height={11}
				/>
			</CTAButton>
		</section>
	);
};

export default MarketplaceSection;
