import React, { memo } from 'react';

/* Product Icon Components */
import ChromeExtension from './Products/ChromeExtension';
import LeadsTracker from './Products/LeadsTracker';
import ProductTracker from './Products/ProductTracker';
import ProfitFinder from './Products/ProfitFinder';
import SearchManagement from './Products/SearchManagement';
import SellerFinder from './Products/SellerFinder';

/* Resources Icons */
import Blogs from './Resources/Blogs';
import AffiliateProgram from './Resources/AffiliateProgram';

/* Types */
import { Products, Resources } from '../../interfaces/Navbar';

interface Props {
	name: Products | Resources;
	width: number;
	height: number;
	fill: string;
}

const ProductsIconMapper: React.FC<Props> = (props) => {
	const { name, ...otherProps } = props;
	let productIcon: React.ReactNode;

	switch (name) {
		// products
		case 'extension': {
			productIcon = <ChromeExtension {...otherProps} />;
			break;
		}
		case 'searchManagement': {
			productIcon = <SearchManagement {...otherProps} />;
			break;
		}
		case 'profitFinder': {
			productIcon = <ProfitFinder {...otherProps} />;
			break;
		}
		case 'productTracker': {
			productIcon = <ProductTracker {...otherProps} />;
			break;
		}
		case 'leadsTracker': {
			productIcon = <LeadsTracker {...otherProps} />;
			break;
		}
		case 'sellerFinder': {
			productIcon = <SellerFinder {...otherProps} />;
			break;
		}

		// resources
		case 'blogs': {
			productIcon = <Blogs {...otherProps} />;
			break;
		}

		case 'affiliateProgram': {
			productIcon = <AffiliateProgram {...otherProps} />;
			break;
		}
		default: {
			productIcon = null;
		}
	}

	return <>{productIcon}</>;
};

export default memo(ProductsIconMapper);
