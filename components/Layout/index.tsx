import React from 'react';
import { useRouter } from 'next/router';

/* Components */
import Navbar from '../Navbar';
import MobileNavBar from '../MobileNavbar';
import Footer from '../Footer';

/* Constants */
import { hideNavigationOnRoutes } from '../../constants';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const router = useRouter();
	const currentPath = router.pathname || '';

	return (
		<>
			{!hideNavigationOnRoutes.includes(currentPath) && <Navbar />}
			<MobileNavBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
