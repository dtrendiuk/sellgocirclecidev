import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import PaperAirplane from '../../../components/Icons/PaperAirplane';
import Comment from '../../../components/Icons/Comment';
import CTAButton from '../../../components/CTAButton';

interface Props {}

const HeroBox: React.FC<Props> = () => {
	return (
		<>
			<section className={styles.heroBoxSection}>
				<div className={`page-container ${styles.heroBox}`}>
					<div className={styles.heroBox__text}>
						<h1>Contact Us</h1>
						<p>
							Sellgo was made for Amazon sellers, by Amazon Sellers to provide
							the tools and resources to build a successful Amazon business.
						</p>

						<div className={styles.requestDemoCard}>
							<Comment width={50} height={39} fill="#808080" />
							<CTAButton
								navigateTo="/demo"
								type="primary"
								size="small"
								className={styles.requestDemoCard__CTA}
							>
								Request a demo
							</CTAButton>
						</div>
					</div>

					<div className={styles.contactCard}>
						<PaperAirplane width={40} height={40} fill="#FC7900" />
						<div>
							<h2>Need to contact us? Send us a message!</h2>
							<a href="mailto:support@sellgo.com">support@sellgo.com</a>
						</div>
						<div className={styles.chat}>
							<p>
								For faster response, talk with us via
								<a id="chat-link" href="#">
									{' '}
									chat.
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroBox;
