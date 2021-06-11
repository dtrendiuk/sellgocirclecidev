/* Camel case names for products */
export type Products =
	| 'extension'
	| 'searchManagement'
	| 'profitFinder'
	| 'productTracker'
	| 'leadsTracker'
	| 'sellerFinder';

export type Resources = 'blogs' | 'affiliateProgram';

export interface ProductsNavigationList {
	head: string;
	desc: string;
	hoverId: string;
}

export interface GroupedNavLinks {
	head: string;
	desc: string;
	navigateTo: string;
	iconName: Products | Resources;
}

export interface ProductsPanelData {
	hoverId: string;
	header: string;
	groupedNavLinksData: GroupedNavLinks[];
}
