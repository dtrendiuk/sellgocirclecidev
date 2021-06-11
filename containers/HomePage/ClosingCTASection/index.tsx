import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const ClosingCTASection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.closingCTASection}`}>
			<div className={styles.closingCTAWrapper}>
				<div className={styles.closingCTAWrapper__left}>
					<h2>Grow Your Amazon Business with Sellgo</h2>
					<p>
						With reliable tools and data that help you at every stage from
						product sourcing to product selling, building a successful Amazon
						business has never been easier.
					</p>

					<CTAButton
						type="primary"
						size="medium"
						navigateTo="/pricing"
						className={styles.closingCTA}
					>
						Pay Only $1 to Sell
					</CTAButton>

					<small>
						Start an Amazon business with $1, <br /> upgrade your tools as you
						grow.
					</small>
				</div>
				<div className={styles.closingCTAWrapper__right}>
					<Image
						src="/growTogether.png"
						width={450}
						height={419}
						alt="Grow Together"
					/>
				</div>
			</div>
		</section>
	);
};

export default ClosingCTASection;
