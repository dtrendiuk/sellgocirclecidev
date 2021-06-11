import React from 'react';

/* Containers */
import HeroBox from '../../containers/ProductTrackerCont/HeroBox';
import InfoSection from '../../containers/ProductTrackerCont/InfoSection';
import NewBenefitsSection from '../../containers/ProductTrackerCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ProductTrackerCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/ProductTrackerCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/productTracker';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const ProductTrackerContPage: React.FC<Props> = () => {
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
			<CommonFeaturesSection />
			<RecommendationSection />
		</>
	);
};

export default ProductTrackerContPage;
