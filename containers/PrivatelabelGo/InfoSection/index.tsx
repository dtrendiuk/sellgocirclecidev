import React from 'react';

import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const InfoSection: React.FC<Props> = () => {
	return (
		<section className={styles.infoSectionWrapper}>
			<div className={`page-container ${styles.infoSection}`}>
				<div className={styles.infoSection__Text}>
					<h2>What is the Sellgo Chrome Extension?</h2>
					<p>
						Sellg&apos;s Chrome Extension is an all-in-one Amazon seller
						toolbox. Access Sellgo&apos;s reliable FBA tools and real-time data
						analytics to help you find replenishable products with the best
						profits and return on investments directly within your browser.
					</p>
					<p>
						Sellg&apos;s Chrome Extension is an all-in-one Amazon seller
						toolbox. Access Sellgo&apos;s reliable FBA tools and real-time data
						analytics to help you find replenishable products with the best
						profits and return on investments directly within your browser.
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image
						src="/searchmanagement_infosection.png"
						width={450}
						height={230}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
