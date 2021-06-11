import React, { useState } from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../../components/CTAButton';
import PricePlanToggleButton from '../../../components/PricePlanToggleButton';

interface Props {}

const RecommendedBundlesSection: React.FC<Props> = () => {
	const [isMonthly, setIsMonthly] = useState<boolean>(true);

	const hanldeChange = () => {
		setIsMonthly(!isMonthly);
	};

	return (
		<section
			className={`big-page-container ${styles.recommendedBundlesWrapper}`}
		>
			<h2 className="secondary-heading">Recommended Bundles</h2>
			<div className={styles.recommendedBundlesSection}>
				<div className={styles.bundlesInfoWrapper}>
					<div className={styles.bundlesInfo}>
						<h3>Free Trial</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt
						</p>
						<a href="#!">
							See the bundled pricing details
							<span>
								<Image
									src="/externalLinkicon.svg"
									width={12}
									height={11}
									alt="Navigate to the bundles section"
								/>
							</span>
						</a>

						<div className={styles.idealWrapper}>
							<p>Ideal For:</p>
							<ul>
								<li>
									<Image
										src="/checkMark.svg"
										alt="Checkmark showing it is ideal for the plan"
										height={8}
										width={10}
									/>
									<span>Starter Plus</span>
								</li>

								<li>
									<Image
										src="/checkMark.svg"
										alt="Checkmark showing it is ideal for the plan"
										height={8}
										width={10}
									/>
									<span>Starter Plus</span>
								</li>

								<li>
									<Image
										src="/checkMark.svg"
										alt="Checkmark showing it is ideal for the plan"
										height={8}
										width={10}
									/>
									<span>Starter Plus</span>
								</li>
							</ul>
						</div>
					</div>

					<div className={styles.bundlesCTAInfo}>
						<small>Starts At</small>
						<p className={styles.price}>
							$49 <span className={styles.price__type}>/mo</span>
							<span className={styles.price__discount}>$500</span>
						</p>
						<PricePlanToggleButton
							isMonthly={isMonthly}
							handleChange={hanldeChange}
						/>
						<CTAButton
							type="primary"
							size="medium"
							navigateTo="/"
							className={styles.bundlesCTA}
						>
							Buy Now
						</CTAButton>
						<a href="#!" className="anchor">
							See all features
						</a>
					</div>
				</div>

				<p className={styles.includesText}>Includes:</p>
				<ul className={styles.includesListWrapper}>
					<li className={styles.includesList}>
						<Image
							src="/gemIcon.svg"
							width={10}
							height={9}
							alt="The benefit is included in the bundle"
						/>
						<span>Benefit</span>
					</li>
					<li className={styles.includesList}>
						<Image
							src="/gemIcon.svg"
							width={10}
							height={9}
							alt="The benefit is included in the bundle"
						/>
						<span>Benefit</span>
					</li>
					<li className={styles.includesList}>
						<Image
							src="/gemIcon.svg"
							width={10}
							height={9}
							alt="The benefit is included in the bundle"
						/>
						<span>Benefit</span>
					</li>
					<li className={styles.includesList}>
						<Image
							src="/gemIcon.svg"
							width={10}
							height={9}
							alt="The benefit is included in the bundle"
						/>
						<span>Benefit</span>
					</li>

					<li className={styles.includesList}>
						<Image
							src="/gemIcon.svg"
							width={10}
							height={9}
							alt="The benefit is included in the bundle"
						/>
						<span>Benefit</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default RecommendedBundlesSection;
