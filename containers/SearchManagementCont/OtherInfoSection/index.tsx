import React from 'react';
import CTAButton from '../../../components/CTAButton';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const OtherInfoSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.otherInfoSection}`}>
			<h2 className={styles.sectionHeading}>Lorem ipsum dolor sit amet</h2>
			<p className={styles.sectionDesc}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore
			</p>

			<div className={styles.cardsSectionWrapper}>
				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}></div>
					<h4 className={styles.cardsWrapper__Text}>logo or name</h4>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}></div>
					<h4 className={styles.cardsWrapper__Text}>logo or name</h4>
				</div>

				<div className={styles.cardsWrapper}>
					<div className={styles.cardsWrapper__Card}></div>
					<h4 className={styles.cardsWrapper__Text}>logo or name</h4>
				</div>
			</div>

			<h2 className="secondary-heading">
				Find new winning products and take your earning
				<br />
				potential to the next level with Sellgo&apos; tools.
			</h2>
			<CTAButton
				type="primary"
				size="small"
				navigateTo="/pricing?type=monthly-and-annual-plans"
				className={styles.otherInfoSectionCTA}
			>
				Get Started
			</CTAButton>
		</section>
	);
};

export default OtherInfoSection;
