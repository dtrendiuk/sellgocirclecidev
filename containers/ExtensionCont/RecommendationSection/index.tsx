import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import RecommendationCard from '../../../components/RecommendationCard';

/* Data */
import { recomDataCardDetails } from './data';

interface Props {}

const RecommendationSection: React.FC<Props> = () => {
	return (
		<section className={styles.recomSectionWrapper}>
			<div className={`page-container ${styles.recomSection}`}>
				<h2>You May Also Like ...</h2>
				<p>
					The Chrome Extension is just one part of Sellgo&apos;s toolbox to help
					your business grow.
					<br />
					While each product is amazing on their own, they work best when used
					alongside one another.
				</p>

				<div className={styles.recomCardsWrapper}>
					{recomDataCardDetails.map((cardDetail: any) => {
						return <RecommendationCard key={uuid()} {...cardDetail} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default RecommendationSection;
