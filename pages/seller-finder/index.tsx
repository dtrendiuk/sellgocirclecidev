import React from 'react';

/* Containers */
import HeroBox from '../../containers/SellerFinderCont/HeroBox';
import InfoSection from '../../containers/SellerFinderCont/InfoSection';
import NewBenefitsSection from '../../containers/SellerFinderCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SellerFinderCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/SellerFinderCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/sellerFinder';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const SellerFinderContPage: React.FC<Props> = () => {
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

export default SellerFinderContPage;
