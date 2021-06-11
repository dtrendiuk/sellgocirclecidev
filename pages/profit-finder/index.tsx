import React from 'react';

/* Containers */
import HeroBox from '../../containers/ProfitFinderCont/HeroBox';
import InfoSection from '../../containers/ProfitFinderCont/InfoSection';
import NewBenefitsSection from '../../containers/ProfitFinderCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ProfitFinderCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/ProfitFinderCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/profitFinder';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const ProfitFinderContPage: React.FC<Props> = () => {
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

export default ProfitFinderContPage;
