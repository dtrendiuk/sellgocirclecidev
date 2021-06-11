import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styles */
import styles from './index.module.scss';

/* Components */
import PricingPlansCardHead from './PricingPlansCardHead';
import PricingPlansCardFeaturesList from './PricingPlansCardFeaturesList';

/* Constants */
import {
	plansWithHeaderGradient,
	pricingCardHeaderGradients
} from '../../constants';

interface Props {
	// product details
	id: number;
	name: string;
	productsDatabase: number;
	salesEstimateCount: number;
	monthlyPrice: number;
	annualPrice: number;
	desc: string;
	featureSubName: string;
	featuresLists: any;

	// plan details
	planName: string;
	isMonthly: boolean;
}

const PricingPlansCard: React.FC<Props> = (props) => {
	const {
		id,
		name,
		productsDatabase,
		salesEstimateCount,
		monthlyPrice,
		annualPrice,
		desc,
		featureSubName,
		featuresLists,
		isMonthly,
		planName
	} = props;

	const isGradientHeader = plansWithHeaderGradient.includes(name);

	return (
		<div className={styles.pricingPlansCardWrapper}>
			{/* Header gradients for plans */}

			{isGradientHeader && (
				<div
					className={styles.headerGradient}
					style={{ background: `${pricingCardHeaderGradients[name]}` }}
				/>
			)}

			<div className={styles.pricingPlansCard}>
				<PricingPlansCardHead
					id={id}
					name={name}
					desc={desc}
					productsDatabase={productsDatabase}
					salesEstimateCount={salesEstimateCount}
					monthlyPrice={monthlyPrice}
					annualPrice={annualPrice}
					// plan details
					planName={planName}
					isMonthly={isMonthly}
				/>

				<p className={styles.planType}>{featureSubName}</p>

				<div className={styles.pricingPlansCardBody}>
					{featuresLists.map((featureList: any) => {
						return (
							<PricingPlansCardFeaturesList key={uuid()} {...featureList} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PricingPlansCard;
