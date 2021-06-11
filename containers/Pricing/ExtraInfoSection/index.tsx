import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ExtraInfoSection: React.FC<Props> = () => {
	return (
		<section className={`big-page-container ${styles.extraInfoSection}`}>
			<div className={styles.extraInfoSection__Image}></div>

			<div className={styles.extraInfoSection__Details}>
				<h2 className={styles.title}>Lorem Ipsum</h2>
				<h3 className={styles.subTitle}>Lorem Ipsum</h3>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<div className={styles.extraInfoWrapper}>
					<div className={styles.extraInfo}>
						<h4>Lorem Ipsum</h4>
						<Image src="/userIcon.svg" width={20} height={14} />
					</div>
					<div className={styles.extraInfo}>
						<h4>Lorem Ipsum</h4>
						<Image src="/userIcon.svg" width={20} height={14} />
					</div>
					<div className={styles.extraInfo}>
						<h4>Lorem Ipsum</h4>
						<Image src="/userIcon.svg" width={20} height={14} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExtraInfoSection;
