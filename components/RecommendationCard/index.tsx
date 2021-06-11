import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {
	title: string;
	description: string;
	navigateTo: string;
	navigateLabel: string;
}

const RecommendationCard: React.FC<Props> = (props) => {
	const { title, description, navigateLabel, navigateTo } = props;

	return (
		<div className={styles.recomCard}>
			<h3>{title}</h3>
			<p>{description}</p>
			<Link href={navigateTo} passHref>
				<a className="anchor">{navigateLabel}</a>
			</Link>
		</div>
	);
};

export default RecommendationCard;
