import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../CTAButton';

interface Props {
	name: string;
	productsDatabase: number;
	ctaLink: string;
	desc: string;
	className?: string;
	withToggle?: boolean;
}

const PayAsYouGoCardHead: React.FC<Props> = (props) => {
	const {
		name,
		ctaLink,
		desc,
		productsDatabase,
		className,
		withToggle
	} = props;

	return (
		<div className={className}>
			<div className={styles.pricingCardHead}>
				<div className={styles.pricingCardHead__Left}>
					<h2>{name}</h2>
					<p>{desc}</p>
				</div>
			</div>

			<div className={styles.pricePerDay}>
				<h3>$1</h3>
				<p>Billed Daily</p>
			</div>

			<div className={styles.productsDatabase}>
				<p>Starts At {productsDatabase.toLocaleString()}</p>
				<Link to="featuresTable" className="anchor" smooth offset={-100}>
					<span>products database</span>
					<Image
						src="/downArrow.svg"
						width={10}
						height={8}
						alt="Move to the all features datababse table"
						className={withToggle ? 'rotate-180' : ''}
					/>
				</Link>
			</div>

			<CTAButton
				type="primary"
				size="medium"
				navigateTo={ctaLink}
				className={styles.buyNameCTA}
			>
				Buy Now
			</CTAButton>
		</div>
	);
};

export default PayAsYouGoCardHead;
