import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FreeTrialFeaturesCard from '../../../components/FreeTrialFeaturesCard';

/* Data */
import { featuresData } from './data';

interface Props {}

const FeaturesSection: React.FC<Props> = () => {
	return (
		<section className={`big-page-container ${styles.featuresSection}`}>
			<h2 className="secondary-heading">You&apos;ll get:</h2>

			<div className={styles.featuresCardWrapper}>
				{featuresData.map((features: any) => {
					return <FreeTrialFeaturesCard key={uuid()} {...features} />;
				})}
			</div>
		</section>
	);
};

export default FeaturesSection;
