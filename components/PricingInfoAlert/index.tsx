import React, { memo } from 'react';
/* Styling */
import styles from './index.module.scss';

/* COmponents */
import NewLink from '../Icons/NewLink';

interface Props {
	className?: string;
	head: string;
	desc: string;
	navigateLabel: string;
	navigateTo: string;
	background: string;
}

const PricingInfoAlert: React.FC<Props> = (props) => {
	const {
		className,
		navigateLabel,
		navigateTo,
		head,
		desc,
		background
	} = props;

	return (
		<div
			className={`${styles.pricingInfoAlert} ${className}`}
			style={{ background }}
		>
			<h3>{head}</h3>
			<div>
				{desc}
				<a href={navigateTo} target="_blank" rel="noopener noreferrer">
					{navigateLabel} {''}
					<NewLink width={12} height={11} fill="#636d76" />
				</a>
			</div>
		</div>
	);
};

export default memo(PricingInfoAlert);
