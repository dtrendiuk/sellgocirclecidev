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
					<h2>Get a Quick Snapshot of High Demand Products</h2>
					<p>
						The Profit Finder compares all of the products in a catalog and
						gives you real-time data to optimize your inventory and
						profitability. Hand-pick the winning products to begin sourcing and
						build your profits.
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/pfSection_600x360.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
