import React from 'react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { cardDetails } from './data';

interface Props {}

const BannerCTASection: React.FC<Props> = () => {
	return (
		<section className={styles.bannerCTASectionWrapper}>
			<div className={styles.background} />

			<div className={`page-container ${styles.bannerCTASection}`}>
				<div className={styles.capsule}>
					<p>This is the banner CTA wordings</p>
					<Link href="/contact-sales" passHref>
						<a className="anchor">Contact Sales</a>
					</Link>
				</div>

				<h2>Lorem ipsum dolor sit amet</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod
				</p>

				<div className={styles.ctaBannerCardsWrapper}>
					{cardDetails.map((cardDetail) => {
						return (
							<div key={uuid()} className={styles.ctaBannerCard}>
								<h3>{cardDetail.title}</h3>
								<p>{cardDetail.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BannerCTASection;
