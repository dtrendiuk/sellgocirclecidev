import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

interface Props {}

const Navbar: React.FC<Props> = () => {
	return (
		<header className={`${styles.header}`}>
			<nav className={`navigation-container ${styles.navbar}`}>
				<NavbarTop />
				<NavbarBottom />
			</nav>
		</header>
	);
};

export default Navbar;
