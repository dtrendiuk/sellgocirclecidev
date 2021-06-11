/* Types */
import { KeyValuePair } from '../../interfaces';

export const plansTabMapper: KeyValuePair = {
	'free-trial': 0,
	'monthly-and-annual-plans': 1
	// since $1 day plan is removed
	// 'monthly-and-annual-plans': 2
};

const reversePlansTabMapper: KeyValuePair = {
	0: 'free-trial',
	1: 'monthly-and-annual-plans',
	2: 'monthly-and-annual-plans'
};

export const generateTabIndexFromQuery = (query: any): number => {
	if (!query) {
		return 1;
	}
	const returnIndex = plansTabMapper[query];

	if (returnIndex === undefined) {
		return 1;
	}

	return returnIndex;
};

export const generateQueryFromTabIndex = (tabIndex: number): string => {
	if (tabIndex === undefined || tabIndex === null) {
		// select plan type 1
		return reversePlansTabMapper[1];
	}
	const queryTypeString = reversePlansTabMapper[tabIndex];
	return queryTypeString;
};
