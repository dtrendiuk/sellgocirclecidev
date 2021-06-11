import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/LeadsTrackerCont/HeroBox';
import InfoSection from '../../containers/LeadsTrackerCont/InfoSection';
import NewBenefitsSection from '../../containers/LeadsTrackerCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/LeadsTrackerCont/CommomFeaturesSection';
import BannerCTASection from '../../containers/LeadsTrackerCont/BannerCTASection';
import PlansSection from '../../containers/LeadsTrackerCont/PlansSection';
import OtherInfoSection from '../../containers/LeadsTrackerCont/OtherInfoSection';
import FAQSection from '../../containers/LeadsTrackerCont/FAQSection';
import RecommendationSection from '../../containers/LeadsTrackerCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/leadsTracker';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* App Config */
import AppConfig from '../../config';

/* Types */
import { FAQDetails } from '../../interfaces/FAQ';

interface Props {
	faqDetails: FAQDetails;
}

const LeadsTrackerContPage: React.FC<Props> = (props) => {
	const { faqDetails } = props;

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				keywords={seoData.keywords.join(',')}
				imageUrl={seoData.imageUrl}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<HeroBox />
			<InfoSection />
			<NewBenefitsSection />
			<section className={styles.newBanner}></section>
			<CommonFeaturesSection />
			<BannerCTASection />
			<PlansSection />
			<OtherInfoSection />
			{faqDetails.data.length > 0 && <FAQSection faqData={faqDetails.data} />}
			<RecommendationSection />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(`${AppConfig.FAQ_BUCKET}/leadsTracker.json`);
	const { data } = response;
	return {
		props: {
			faqDetails: data
		},
		revalidate: 1
	};
};

export default LeadsTrackerContPage;
