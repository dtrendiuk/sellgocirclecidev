import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	benefitSummary: string;
	popularFeaturesList: any;
	details: string;
}

const BenefitsPanel: React.FC<Props> = (props) => {
	const { benefitSummary, details } = props;

	return (
		<article className={styles.benefitsPanel}>
			<div className={styles.benefitsPanel__Left}>
				<p className={styles.benefitsSummary}>{benefitSummary}</p>
				<div className={styles.details}>{details}</div>
			</div>
			<div className={styles.benefitsPanel__Right}>
				<div className={styles.benefitsImage}></div>
				{/* <div className={styles.benefitsDescription}>
					<h3>popular Features:</h3>

					<div className={styles.featureListWrapper}>
						{popularFeaturesList &&
							popularFeaturesList.map((feature: any) => {
								return (
									<div key={uuid()} className={styles.featureList}>
										<h4>{feature.title}</h4>
										<p>{feature.details}</p>
									</div>
								);
							})}
					</div>
				</div> */}
			</div>
		</article>
	);
};

export default BenefitsPanel;
