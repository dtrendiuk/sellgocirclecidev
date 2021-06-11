import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const BundlesPanel: React.FC<Props> = () => {
	return (
		<section className={styles.bundlesPanelWrapper}>
			<div className={`page-container ${styles.bundlesPanelSection}`}>
				This is bundles Panel
			</div>
		</section>
	);
};

export default BundlesPanel;
