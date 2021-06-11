import React from 'react';

/* Containers */
import HeroBox from '../../containers/ExtensionCont/HeroBox';
import InfoSection from '../../containers/ExtensionCont/InfoSection';
import NewBenefitsSection from '../../containers/ExtensionCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/ExtensionCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/ExtensionCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/extension';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const ExtensionContPage: React.FC<Props> = () => {
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

export default ExtensionContPage;
