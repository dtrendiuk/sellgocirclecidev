import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Contact/HeroBox';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/contactUs';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const ContactUsPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main>
				<HeroBox />

				<section className={`page-container ${styles.queryCardsWrapper}`}>
					<div className={styles.queryCard}>
						<h3>Media Inquiry</h3>
						<p>Please Contact:</p>
						<div className={styles.queryCard__links}>
							<a href="mailto:press@sellgo.com" className="anchor">
								press@sellgo.com
							</a>
						</div>
					</div>

					<div className={styles.queryCard}>
						<h3>Affiliate Partner</h3>
						<p>Please Contact:</p>

						<div className={styles.queryCard__links}>
							<a href="mailto:affiliate@sellgo.com" className="anchor">
								affiliate@sellgo.com
							</a>
							<p>
								or visit{' '}
								<Link href="/affiliate-program">
									<a className="anchor">Affiliate Program</a>
								</Link>
							</p>
						</div>
					</div>

					<div className={styles.queryCard}>
						<h3>Questions</h3>
						<p>Please Contact:</p>
						<div className={styles.queryCard__links}>
							<a href="mailto:support@sellgo.com" className="anchor">
								support@sellgo.com
							</a>
							<p>
								or visit{' '}
								<Link href="/contact">
									<a className="anchor">Contact Us</a>
								</Link>
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default ContactUsPage;
