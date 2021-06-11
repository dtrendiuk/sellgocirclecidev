import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	statsCount: number;
	statsLabel: string;
	bottomStats: boolean;
	iconImageLink: string;
	imageAltText: string;
}

const StatsCard: React.FC<Props> = (props) => {
	const {
		statsCount,
		statsLabel,
		bottomStats,
		iconImageLink,
		imageAltText
	} = props;

	const statsCardClassName = `${styles.statsCard} ${
		bottomStats ? styles.statsCard__bottom : ''
	}`;
	return (
		<div className={statsCardClassName}>
			<Image src={iconImageLink} alt={imageAltText} width={35} height={35} />
			<h3 className={styles.statsCount}>
				{statsCount} <span>+</span>
			</h3>
			<p className={styles.statsMessage}>{statsLabel}</p>
		</div>
	);
};

export default StatsCard;
