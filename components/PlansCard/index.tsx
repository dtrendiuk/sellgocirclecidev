import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

interface Props {
	name: string;
	startingPrice: number;
	featureList: string[];
}

const PlansCard: React.FC<Props> = (props) => {
	const { name, startingPrice, featureList } = props;

	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className={styles.plansCard}>
			<div className={styles.plansCard__Content}>
				<h3>{name}</h3>

				{startingPrice === 0 ? (
					<>
						<small>100% free</small>
						<p>No credit card required</p>
					</>
				) : (
					<p>{`Starting at $${startingPrice}/month`}</p>
				)}
			</div>

			<button onClick={() => setIsExpanded(!isExpanded)}>
				Popular Features
				{isExpanded ? <span>&#8722; </span> : <span>&#43;</span>}
			</button>

			{isExpanded && (
				<ul className={styles.popularFeaturesList}>
					{featureList.map((feature: string) => {
						return (
							<li key={uuid()}>
								<span>&#x2713; </span>
								{feature}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default PlansCard;
