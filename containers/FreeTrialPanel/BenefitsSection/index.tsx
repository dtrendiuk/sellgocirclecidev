import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';
import Apple from '../../../components/Icons/Apple';

/* Config */
import AppConfig from '../../../config';

interface Props {}

const BenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.benefitsSectionWrapper}>
			<div className={styles.bgCircle}></div>

			<div className={`big-page-container ${styles.benefitsSection}`}>
				<h2 className="secondary-heading">Also Comes With...</h2>

				<div className={styles.benefitsCardWrapper}>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Full Team Delegation</h3>
						<p>Delegate tasks and collaborate with team members.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Scale at Your Pace</h3>
						<p>Start small with low committment and scale up later.</p>
						<p></p>
					</div>
					<div className={styles.benefitsCard}>
						<Apple width={20} height={23} fill="#000" />
						<h3>Billions of Data Points</h3>
						<p>Access tons of data at your fingertips.</p>
						<p></p>
					</div>
				</div>

				<div className={styles.benefitsCTAWrapper}>
					<CTAButton
						type="primary"
						size="medium"
						navigateTo={`${AppConfig.APP_URL}/signup?type=free`}
						className={styles.benefitsCTA}
						asExternal
						newTarget
					>
						Get Started
					</CTAButton>
					<p>We offer a 7-day free trial with no credit card required.</p>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
