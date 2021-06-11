import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import ProductCard from '../../../components/ProductCard';
import CTAButton from '../../../components/CTAButton';

/* Data */
import { newBenefitsData } from './data';

interface Props {}

const NewBenefitsSection: React.FC<Props> = () => {
	return (
		<section className={styles.newBenefitsSection}>
			<div className={`page-container ${styles.benefitsWrapper}`}>
				<h2 className="secondary-heading">
					A Scope into the Competitive Landscape
				</h2>

				<div className={styles.benefitsCardsWrapper}>
					{newBenefitsData.map((benefitsData: any, index: number) => {
						return (
							<ProductCard
								key={uuid()}
								{...benefitsData}
								reversed={(index + 1) % 2 === 0}
							/>
						);
					})}
				</div>

				<h2 className="secondary-heading">
					Scout out million of sellers and find profitable products and brands
					to build your catalog.
				</h2>
				<CTAButton
					type="primary"
					size="small"
					navigateTo="/pricing?type=monthly-and-annual-plans"
					className={styles.newBenefitsCTA}
				>
					Get Started
				</CTAButton>
			</div>
		</section>
	);
};

export default NewBenefitsSection;
