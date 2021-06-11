import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FreeTrialCTABox from '../../components/FreeTrialCTABox';
import PricingInfoAlert from '../../components/PricingInfoAlert';
import ContactInfo from '../../components/ContactInfo';

/* Containers */
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import CTAButton from '../../components/CTAButton';

/* Config */
import AppConfig from '../../config';

interface Props {}

const FreeTrialPanel: React.FC<Props> = () => {
	return (
		<>
			<section className={`big-page-container ${styles.freeTrialSection}`}>
				<h2 className="secondary-heading">
					Maximize Your Profits with Sellgo&apos;s Free Tools!
				</h2>
				<p className={styles.info}>
					Access all of Sellgo&apos;s free trial Amazon tools and integrate them
					into your Amazon business.
				</p>
				<FreeTrialCTABox className={styles.freeTrialCTABox} isPrimary />

				<PricingInfoAlert
					className={styles.freeTrialInfoAlert}
					navigateTo="/pricing?type=monthly-and-annual-plans"
					navigateLabel="Premium Tools"
					head={`Start selling on Amazon today with Sellgo's premium tools`}
					desc={`	Want to try our advanced Amazon tools? Review our FBA tools and pricing
									packages.Our premium tools empower you to track and research more products to
										optimize your Amazon business.`}
					background="#F2EFE4"
				/>
			</section>

			<FeaturesSection />
			<BenefitsSection />

			<section className={`big-page-container ${styles.contactInfoSection}`}>
				<ContactInfo message="" />
			</section>

			<section className={`big-page-container ${styles.otherInfoSection}`}>
				<h2 className="secondary-heading">
					Maximize Your Profits with Sellgo&apos;s Free Tools!
				</h2>

				<div className={styles.otherInfoCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={`${AppConfig.APP_URL}/signup?type=free`}
						className={styles.otherInfoCTA}
						asExternal
						newTarget
					>
						Try Now 7-day Free Trial
					</CTAButton>
					<p>We offer a 7-day free trial with no credit card required.</p>
				</div>
			</section>
		</>
	);
};

export default FreeTrialPanel;
