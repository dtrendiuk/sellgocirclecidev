import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import User from '../../Icons/Person';

interface Props {}

const NavbarTop: React.FC<Props> = () => {
	return (
		<div className={styles.navbarTop}>
			<Link href="/contact-sales" passHref>
				<a className={styles.navbarLink__sales}>
					<User width={14} height={12} fill="#2e3b4a" />
					<span>Contact Sales</span>
				</a>
			</Link>

			<ul className={styles.navbarTopLinksList}>
				<li className={styles.navbarTopLink}>
					<a
						href="https://app.sellgo.com/"
						className={styles.navbarLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Go to my account
					</a>
				</li>
				<li className={styles.navbarTopLink}>
					<Link href="/contact" passHref>
						<a className={styles.navbarLink}>Contact Us</a>
					</Link>
				</li>
				<li className={styles.navbarTopLink}>
					<Link href="/about-us" passHref>
						<a className={styles.navbarLink}>About</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavbarTop;
