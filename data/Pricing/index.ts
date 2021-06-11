/* Interfaces */
import { KeyValuePair } from '../../interfaces';

import { pay1DollarPlan, payMonthlyAndAnnualPlan } from './allFeaturesTable';

export const allPlansFeatureMapper: KeyValuePair = {
	'Monthly and Annual Pricing Plans': payMonthlyAndAnnualPlan,
	'Pay $1 for a Day': pay1DollarPlan
};

export const getAllFeaturesForPlans = (planName: string) => {
	const allFeatures = allPlansFeatureMapper[planName];
	if (!allFeatures) {
		return [
			{
				header: [],
				body: [[]]
			}
		];
	}
	return allFeatures;
};
