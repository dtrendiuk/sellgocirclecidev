import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import CTAButton from '../../CTAButton';
import ProductsNavbarExpansion from '../ProductsNavbarExpansion';
import ResourcesNavBarExpansion from '../ResourcesNavbarExpansion';
import Bottom from '../../Icons/Chervons/Bottom';

interface Props {}

const NavbarBottom: React.FC<Props> = () => {
	return (
		<div className={styles.navbarBottom}>
			<div className={styles.navbarBottom__left}>
				<Link href="/" passHref>
					<a>
						<Image
							src="/sellgoLogo.png"
							width={73}
							height={29}
							priority
							alt="Sellgo Inc. Company Logo"
						/>
					</a>
				</Link>

				<ul className={styles.navbarBottomLinksList}>
					<li className={styles.navbarBottomLink}>
						<a href="#" className={styles.navLink}>
							Products <Bottom width={10} height={8} fill="#2e3b4a" />
						</a>
						<ProductsNavbarExpansion
							className={styles.expandedProductsNavbar}
						/>
					</li>

					<li className={styles.navbarBottomLink}>
						<Link href="/pricing" passHref>
							<a className={styles.navLink}>Pricing</a>
						</Link>
					</li>

					<li className={styles.navbarBottomLink}>
						<a href="#" className={styles.navLink}>
							Resources <Bottom width={10} height={8} fill="#2e3b4a" />
						</a>
						<ResourcesNavBarExpansion
							className={styles.expandedResourcesNavbar}
						/>
					</li>
				</ul>
			</div>

			<CTAButton
				type="primary"
				size="small"
				navigateTo="/pricing"
				className={styles.navbarCTA}
			>
				Pay Only $1 to Sell
			</CTAButton>
		</div>
	);
};

export default NavbarBottom;
