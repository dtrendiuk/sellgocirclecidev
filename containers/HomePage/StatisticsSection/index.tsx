import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import StatsCard from '../../../components/StatsCard';

/* Data */
import { statisticsData } from './data';

interface Props {}

const StatisticsSection: React.FC<Props> = () => {
	return (
		<section className={styles.statisticsSection}>
			<div className={`page-container ${styles.statisticsWrapper}`}>
				<h2 className="secondary-heading">
					Real Data, Real Tools, Real Results
				</h2>

				<p>
					While you own your business, you don&apos;t have to build it alone.
					Master everything from scouting, sourcing, and selling and get the
					most out of your Amazon business with Sellgo&apos;s FBA tools and a
					community of Amazon sellers just like you.
				</p>

				<div className={styles.statisticsGrid}>
					{statisticsData.map((statistics: any, index: number) => {
						return (
							<StatsCard key={uuid()} {...statistics} bottomStats={index > 3} />
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default StatisticsSection;
