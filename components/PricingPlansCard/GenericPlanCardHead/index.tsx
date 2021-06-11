import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../CTAButton';
import GemGenerator from '../../GemGenerator';
import PricePlanToggleButton from '../../PricePlanToggleButton';
import AppConfig from '../../../config';

interface Props {
	name: string;
	desc: string;
	monthlyPrice: number;
	annualPrice: number;

	// plan details
	isMonthly: boolean;

	// used for pricing cards on comparision table
	withToggle?: boolean;
	className?: string;
	handleChange?: any;
}

const GenericPriceCardHead: React.FC<Props> = (props) => {
	const {
		name,
		isMonthly,
		monthlyPrice,
		annualPrice,
		desc,
		withToggle,
		className,
		handleChange
	} = props;

	const checkoutLink = `${AppConfig.APP_URL}/subscription?mode=${
		isMonthly ? 'monthly' : 'yearly'
	}&type=${name.toLowerCase()}`;

	return (
		<div className={className}>
			<div className={styles.pricingCardHead}>
				<div className={styles.pricingCardHead__Left}>
					{!withToggle && (
						<div className={styles.planGems}>
							<GemGenerator name={name} />
						</div>
					)}
					<h2>{name}</h2>
					{!withToggle && <p>{desc}</p>}
				</div>
			</div>

			<div className={styles.startingAt}>
				<p>
					Starts At{' '}
					{!isMonthly && (
						<span className="strike-text">${Math.round(monthlyPrice)}</span>
					)}
				</p>

				{isMonthly ? (
					<h3>${Math.round(monthlyPrice)}/ Mo</h3>
				) : (
					<h3>${Math.round(annualPrice / 12)}/ Mo</h3>
				)}

				{!isMonthly ? (
					<p className={styles.billedAtPrice}>
						Billed At <span className="strike-text">${monthlyPrice * 12}</span>
						<span style={{ fontWeight: 'bold', textDecoration: 'none' }}>
							${Math.round(annualPrice)}/yr
						</span>
						Save ${Math.round(monthlyPrice * 12 - annualPrice)}
					</p>
				) : (
					<p>Billed Monthly</p>
				)}
			</div>

			{withToggle && (
				<div className={styles.toggleWrapper}>
					<PricePlanToggleButton
						isMonthly={isMonthly}
						handleChange={handleChange}
					/>
				</div>
			)}

			<CTAButton
				type="primary"
				size="medium"
				navigateTo={checkoutLink}
				className={`${withToggle ? styles.tableCardCTA : styles.buyNowCTA}`}
				asExternal
				newTarget
			>
				Buy Now
			</CTAButton>
		</div>
	);
};

export default GenericPriceCardHead;
