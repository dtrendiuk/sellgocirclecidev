/* Types */
import {
	ProductsNavigationList,
	ProductsPanelData
} from '../../../interfaces/Navbar';

export const productsNavigationList: ProductsNavigationList[] = [
	{
		head: 'Sellgo',
		desc: 'Our Entire Amazon Toolbox.',
		hoverId: 'products'
	}
];

export const productsRightPanelData: ProductsPanelData[] = [
	{
		hoverId: 'products',
		header: 'Features',
		groupedNavLinksData: [
			{
				head: 'Extension',
				desc: 'Product Validation on Amazon Page',
				navigateTo: '/extension',
				iconName: 'extension'
			},
			{
				head: 'Profit Finder',
				desc: 'Wholesale Bulk Calculator',
				navigateTo: '/profit-finder',
				iconName: 'profitFinder'
			},
			{
				head: 'Product Tracker ',
				desc: 'Daily Tracking and Scouting',
				navigateTo: '/product-tracker',
				iconName: 'productTracker'
			},
			{
				head: 'Search Management',
				desc: 'Streamline Wholesale Inventories',
				navigateTo: '/search-management',
				iconName: 'searchManagement'
			},
			{
				head: 'Seller Finder',
				desc: 'Take Advantage of Competition',
				navigateTo: '/seller-finder',
				iconName: 'sellerFinder'
			}
		]
	}
];
