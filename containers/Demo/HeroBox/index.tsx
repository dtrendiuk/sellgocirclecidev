import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<div className={styles.heroboxWrapper}>
			<div className={`page-container ${styles.herobox}`}>
				<h1>Get a Free Demo of Sellgo&apos;s Research Platform</h1>
				<p>
					See how Sellgo&apos;s seller tools and real-time data can help grow
					your Amazon business from everything between product sourcing to
					product research.
				</p>
			</div>
		</div>
	);
};

export default HeroBox;
