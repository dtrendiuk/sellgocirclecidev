import React from 'react';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FAQAccordion from '../../../components/FAQAccordion';

import { FAQData } from '../../../interfaces/FAQ';

interface Props {
	faqData: FAQData[];
}

const FAQSection: React.FC<Props> = (props) => {
	const { faqData } = props;
	return (
		<section className={`page-container ${styles.faqSection}`}>
			<h2>Frequently Asked Questions</h2>

			<FAQAccordion data={faqData} horizontalFocus />
		</section>
	);
};

export default FAQSection;
