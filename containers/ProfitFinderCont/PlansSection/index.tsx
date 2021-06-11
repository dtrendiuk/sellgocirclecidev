import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import PlansCard from '../../../components/PlansCard';

/* Data */
import { plansData } from './data';

interface Props {}

const PlansSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.plansSection}`}>
			<h2 className={styles.plansSection__Title}>Lorem ipsum dolor sit amet</h2>
			<p className={styles.plansSection__Info}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore
			</p>

			<div className={styles.plansWrapper}>
				{plansData.map((planDetails: any) => {
					return <PlansCard key={uuid()} {...planDetails} />;
				})}
			</div>

			<div className={styles.ctaWrapper}>
				<CTAButton
					type="primary"
					size="small"
					navigateTo="/"
					className={styles.plansCTA}
				>
					Get Free Opportunity Finder
				</CTAButton>
				<CTAButton
					type="secondary"
					size="small"
					navigateTo="/"
					className={styles.plansCTA}
				>
					Demo Premium Opportunity Finder
				</CTAButton>
			</div>

			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>

			<h4 className={styles.achievementsHeading}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			</h4>

			<div className={styles.achievementsWrapper}>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
				<Image
					src="/achievementCard.svg"
					alt="Recognition award for something"
					width={90}
					height={110}
					className={styles.achievement}
				/>
			</div>
		</section>
	);
};

export default PlansSection;
