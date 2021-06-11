import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {
	isProductsPlanSelected: boolean;
	setProductsPanel: () => void;
	setBundlesPanel: () => void;
}

const HeroBox: React.FC<Props> = () => {
	return (
		<>
			<section className={styles.heroboxSection}>
				<h1>Sell better with the right plan.</h1>
				<p>Pay less on software, invest more in your business.</p>

				<div className={styles.tabsWrapper}>
					{/* <button
						className={`${styles.tab} ${
							isProductsPlanSelected ? '' : styles.tab__disabled
						} ${styles.tab__pricing}`}
						onClick={setProductsPanel}
					>
						Products & Plans
					</button> */}
					{/* <button
						className={`${styles.tab} ${
							!isProductsPlanSelected ? '' : styles.tab__disabled
						} ${styles.tab__bundles}`}
						onClick={setBundlesPanel}
					>
						Bundles
					</button> */}
				</div>
			</section>
		</>
	);
};

export default HeroBox;
