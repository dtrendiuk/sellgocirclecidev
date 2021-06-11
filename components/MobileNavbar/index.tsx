import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Sidebar from '../Sidebar';

interface Props {}

const MobileNavBar: React.FC<Props> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleChange = (state: boolean) => {
		setIsOpen(state);
	};

	return (
		<header className={`mobile-nav-container ${styles.header}`}>
			<nav className={styles.mobileNav}>
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

				<ul className={styles.mobileNavLinks}></ul>

				<div
					className={styles.burger}
					role="button"
					aria-roledescription="button"
					onClick={() => handleChange(true)}
					tabIndex={0}
					onKeyPress={() => {}}
				>
					<span className={styles.burger__line}></span>
					<span className={styles.burger__line}></span>
					<span className={styles.burger__line}></span>
				</div>
			</nav>

			<Sidebar isOpen={isOpen} handleClose={() => handleChange(false)} />
		</header>
	);
};

export default MobileNavBar;
