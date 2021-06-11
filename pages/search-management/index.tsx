import React from 'react';

/* Containers */
import HeroBox from '../../containers/SearchManagementCont/HeroBox';
import InfoSection from '../../containers/SearchManagementCont/InfoSection';
import NewBenefitsSection from '../../containers/SearchManagementCont/NewBenefitsSection';
import CommonFeaturesSection from '../../containers/SearchManagementCont/CommomFeaturesSection';
import RecommendationSection from '../../containers/SearchManagementCont/RecommendationSection';

/* Components */
import SEOHead from '../../components/SEOHead';

/* Data */
import { seoData } from '../../data/SEO/searchManagement';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

interface Props {}

const SearchManagementContPage: React.FC<Props> = () => {
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

export default SearchManagementContPage;
