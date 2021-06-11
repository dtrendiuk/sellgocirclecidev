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
					<h2>Breakdown Catalogs with Ease</h2>
					<p>
						Simply upload catalogs files to our Search Management tool then sort
						and filter millions of products. Find winning products that will
						take your business to the next level.
					</p>
				</div>
				<div className={styles.infoSection__Image}>
					<Image src="/smSection_600x360.png" width={600} height={360} alt="" />
				</div>
			</div>
		</section>
	);
};

export default InfoSection;
