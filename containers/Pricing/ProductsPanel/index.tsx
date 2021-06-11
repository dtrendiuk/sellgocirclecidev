import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from 'react-tabs';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

/* Styling */
import styles from './index.module.scss';

/* Conatiners */
import PricingPlansSection from '../PricingPlansSection';
import FreeTrialPanel from '../../FreeTrialPanel';

/* Data */
import { planTypes, plansAndProductsDetails } from './data';

/* Utils */
import {
	generateQueryFromTabIndex,
	generateTabIndexFromQuery
} from '../../../utils/Pricing';

interface Props {}

const ProductsPanel: React.FC<Props> = () => {
	// Only for server side isomorphic apps
	resetIdCounter();

	const router = useRouter();

	const queryCollection = router.query || {};

	const tabIndex = generateTabIndexFromQuery(queryCollection.type);

	const [selectedPlanType, setSelectedPlanType] = useState<number>(tabIndex);

	useEffect(() => {
		const tabIndex = generateTabIndexFromQuery(queryCollection.type);
		setSelectedPlanType(tabIndex);
	}, [router]);

	const handlePlanSelectChange = (index: number, lastIndex: number) => {
		// [0,1,2,3,4]=['Free Trial', 'Monthly and Annual Plans']

		if (index === undefined || index === null) {
			// perform shallow routing on pricing to prevent new data fetch on get static props
			setSelectedPlanType(lastIndex);
			router.push(`/pricing?type=${generateQueryFromTabIndex(1)}`, undefined, {
				shallow: true
			});
		} else {
			router.push(
				`/pricing?type=${generateQueryFromTabIndex(index)}`,
				undefined,
				{
					shallow: true
				}
			);
			setSelectedPlanType(index);
		}
	};

	return (
		<Tabs
			selectedTabClassName={styles.pricingPanelTab__Selected}
			onSelect={handlePlanSelectChange}
			// defaultIndex={2}
			selectedIndex={selectedPlanType}
		>
			<TabList className={styles.pricingPanelTabList}>
				{planTypes.map((planType: any) => {
					return (
						<Tab key={uuid()} className={styles.pricingPanelTab}>
							{planType.name}
							{planType.isNew && <span className={styles.newBadge}>New</span>}
						</Tab>
					);
				})}
			</TabList>

			{/* Seperation of concern for free trial tab */}
			<TabPanel>
				<FreeTrialPanel />
			</TabPanel>

			{plansAndProductsDetails.map((plan: any) => {
				return (
					<TabPanel key={uuid()}>
						<PricingPlansSection
							planName={plan.planName}
							summary={plan.summary}
							infoAlertMessage={plan.infoAlertMessage}
							productsIncluded={plan.productsIncluded}
							selectedPlanType={selectedPlanType}
						/>
					</TabPanel>
				);
			})}
		</Tabs>
	);
};

export default ProductsPanel;
