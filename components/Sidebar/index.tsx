import React from 'react';
import { v4 as uuid } from 'uuid';

// @ts-ignore : cannot find typed utils
import MultilevelSidebar from 'react-multilevel-sidebar';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Close from '../Icons/Close';

interface Props {
	isOpen: boolean;
	handleClose: () => void;
}

const options = [
	{
		title: 'Products',
		content: [
			{
				id: uuid(),
				name: 'Extension',
				to: '/extension'
			},
			{ id: uuid(), name: 'Search Management', to: '/search-management' },
			{ id: uuid(), name: 'Profit Finder', to: '/profit-finder' },
			{ id: uuid(), name: 'Product Tracker', to: '/product-tracker' },
			{ id: uuid(), name: 'Seller Finder', to: '/seller-finder' }
		]
	},

	{
		title: 'Pricing',
		content: [
			{ id: uuid(), name: 'Monthly and Annual Plans', to: '/pricing' },
			{ id: uuid(), name: 'Free Trial', to: '/pricing?type=free-trial' }
		]
	},
	{
		title: 'Resources',
		content: [
			{ id: uuid(), name: 'About us', to: '/about-us' },
			{ id: uuid(), name: 'Blogs', to: '/blogs' }
		]
	},

	{
		title: 'Support',
		content: [
			{ id: uuid(), name: 'Contact Us', to: '/contact' },
			{ id: uuid(), name: 'Contact Sales', to: '/contact-sales' },
			{ id: uuid(), name: 'Request Free Demo', to: '/demo' }
		]
	}
];

const Sidebar: React.FC<Props> = (props) => {
	const { isOpen, handleClose } = props;

	const className = `${isOpen ? styles.sidebar : styles.closeSidebar}`;
	return (
		<div className={className}>
			<MultilevelSidebar
				open={isOpen}
				options={options}
				// onItemClick={handleClose}
			/>
			{/* using in our button to open the sidebar */}
			<div
				className={styles.close}
				onClick={handleClose}
				tabIndex={0}
				role="button"
				onKeyPress={() => {}}
			>
				<Close width={15} height={15} fill="#2E3B4A" />
			</div>
		</div>
	);
};

export default Sidebar;
