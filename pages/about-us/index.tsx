import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';
import CTAButton from '../../components/CTAButton';
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/aboutPage';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const AboutUsPage: React.FC<Props> = () => {
	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.aboutUs}>
				<section className={`page-container ${styles.welcomeSection}`}>
					<div className={styles.welcomeSection__text}>
						<h1>
							Welcome to Sell<span>go</span>
						</h1>

						<p>
							Our mission at Sellgo is to empower Amazon sellers with the right
							tools and data to grow successful businesses.
						</p>

						<p>
							Sellgo was created in 2018 by Amazon sellers for Amazon sellers.
							While Sellgo started off specializing in Amazon FBA and Amazon
							Wholesale, we&apos;ve built our tools and services to encompass
							all sellers with any model and any level of experience including
							Amazon FBA or Amazon FBA as well as Wholesalers, Private Label
							Sellers, and Agencies.
						</p>

						<p>
							While our company is headquarter in Portland, Oregon, our team
							members span across the globe and are unified with the same
							passion and mission: to help Amazon sellers flourish. If you would
							like to learn more about Sellgo, our team, or our mission, we
							welcome you to send us a message at{' '}
							<a href="mailto:support@sellgo.com" className="anchor">
								support@sellgo.com
							</a>
							.
						</p>
					</div>

					<div className={styles.welcomeSection__image}>
						<Image
							src="/ptrHerobox_600x360.png"
							width={600}
							height={360}
							alt="Welcome to sellgo"
						/>
					</div>
				</section>

				<section className={`page-container ${styles.contentSection}`}>
					<div
						className={`${styles.contentSection__text} ${styles.contentSection__text__reversed}`}
					>
						<h2>Our Tools and Services</h2>

						<p>
							At Sellgo, we have developed 5 different tools that you can start
							using now. These tools were made to assist sellers at every stage
							of their selling journey including product scouting to product
							sourcing to product research.
						</p>
						<p>
							To learn more about our tools and services, check out our product
							pages.
						</p>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/pfHerobox_600x360.png"
							width={600}
							height={360}
							alt="Tools and Services"
						/>
					</div>
				</section>

				<section className={`page-container ${styles.contentSection}`}>
					<div className={`${styles.contentSection__text}`}>
						<h2>Our Pricing Plans</h2>

						<p>
							We currently offer a free trial and premium plan that you can
							sign-up for now. Our plans are meant to help any seller at any
							level of experience. Starting with our free trial, you can use our
							tools and services for 7-days free.
						</p>

						<p>
							For our premium plans, starting with the Starter plan, Suite plan,
							and ending with the Professional plan. Each plan can be chosen
							based on the size and needs of your business. Check out of pricing
							plans below.
						</p>

						<CTAButton
							size="small"
							type="secondary"
							navigateTo="/pricing"
							className={styles.aboutUsCTA}
						>
							Get Started
						</CTAButton>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/smHerobox_600x360.png"
							width={600}
							height={360}
							alt="Pricing Plans section showcase"
						/>
					</div>
				</section>

				<section className={`page-container ${styles.contentSection} $`}>
					<div
						className={`${styles.contentSection__text} ${styles.contentSection__text__reversed}`}
					>
						<h2>Our Team</h2>

						<p>
							Our team members and leadership consist of Amazon sellers just
							like you. We&apos;ve sold on Amazon and know what challenges and
							obstacles you may face. Our FBA tools and software solutions were
							made by Amazon sellers for Amazon sellers.
						</p>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/ourTeam_600x477.png"
							width={600}
							height={470}
							alt="Our teams setion showcase"
						/>
					</div>
				</section>

				{/* <section className={`page-container ${styles.contentSection}`}>
					<div className={`${styles.contentSection__text}`}>
						<h2>Careers</h2>
						<p>
							We’re a global team of Amazon sellers and experts from 16
							countries — and we’re proud to serve entrepreneurs and brands from
							around the world.
						</p>
						<CTAButton
							type="secondary"
							size="small"
							navigateTo="/careers"
							className={styles.aboutUsCTA}
						>
							Work with us
						</CTAButton>
					</div>

					<div className={styles.contentSection__image}>
						<Image
							src="/ourTeam_600x477.png"
							width={600}
							height={495}
							alt="Our Team Image"
						/>
					</div>
				</section> */}

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
								<Link href="/support">
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

export default AboutUsPage;
