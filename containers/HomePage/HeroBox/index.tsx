import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<section className={`${styles.heroboxWrapper}`}>
			<div className={`page-container ${styles.herobox}`}>
				<div className={`${styles.heroboxText}`}>
					<h1 className={`${styles.heading}`}>
						Start Selling <br /> On Amazon Today
					</h1>
					<p className={`${styles.tagline}`}>
						Scout, source, and sell high demand, winning products
						<br />
						for your Wholesale business with prime FBA tools.
					</p>

					<CTAButton
						type="primary"
						size="medium"
						navigateTo="/pricing?type=monthly-and-annual-plans"
						className={styles.ctaHeroBox}
					>
						Pay Only $1 to Sell
					</CTAButton>

					<small className={`${styles.ctaOverText}`}>
						Start an Amazon business with $1, <br /> upgrade your tools as you
						grow.
					</small>
				</div>

				<div className={styles.heroboxImage}>
					<Image src="/heroboxImage.png" width={808} height={614} />
				</div>
			</div>
		</section>
	);
};

export default HeroBox;
