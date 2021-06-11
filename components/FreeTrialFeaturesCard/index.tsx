import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Check from '../Icons/Check';

interface Props {
	title: string;
	featuresList: string[];
	popularFeaturesList: string[];
}

const FreeTrialFeaturesCard: React.FC<Props> = (props) => {
	const { title, featuresList, popularFeaturesList } = props;

	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className={styles.featuresCard}>
			<div className={styles.featuresCard__Content}>
				<h3>{title}</h3>
				<ul>
					{featuresList.map((benefits: string) => {
						return (
							<li key={uuid()}>
								<Check width={10} height={8} fill="#3b4557" />
								<span>{benefits}</span>
							</li>
						);
					})}
				</ul>
			</div>

			<button onClick={() => setIsExpanded(!isExpanded)}>
				Popular Features
				{isExpanded ? <span>&#8722; </span> : <span>&#43;</span>}
			</button>

			{isExpanded && (
				<ul className={styles.popularFeaturesList}>
					{popularFeaturesList.map((feature: string) => {
						return (
							<li key={uuid()}>
								<Check width={10} height={8} fill="#3b4557" />
								<span>{feature}</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default FreeTrialFeaturesCard;
