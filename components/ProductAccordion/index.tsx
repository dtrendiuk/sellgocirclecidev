import React from 'react';
import Link from 'next/link';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemState,
	resetNextUuid
} from 'react-accessible-accordion';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

interface Props {
	data: any;
}

const ProductAccordion: React.FC<Props> = (props) => {
	const { data } = props;

	// Reset UUID for react accordion (server apps)
	resetNextUuid();

	return (
		<>
			<Accordion className={styles.productAccordion} allowZeroExpanded>
				{data.map((accordionData: any) => {
					const {
						title,
						description,
						ctaLinkDetails,
						listDetails
					} = accordionData;
					return (
						<AccordionItem className={styles.productAccordionItem} key={uuid()}>
							<AccordionItemHeading className={styles.productAccordionHeading}>
								<AccordionItemButton className={styles.productAccordionButton}>
									<p>
										{title}
										<AccordionItemState>
											{({ expanded }) => {
												return expanded ? (
													<span>&#8722;</span>
												) : (
													<span>&#43;</span>
												);
											}}
										</AccordionItemState>
									</p>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel className={styles.productAccordionPanel}>
								<p>{description}</p>
								<ul>
									{listDetails.map((list: string) => {
										return <li key={uuid()}>{list}</li>;
									})}
								</ul>
								{ctaLinkDetails && ctaLinkDetails.name && (
									<Link href={ctaLinkDetails.linkTo} passHref>
										<a className="anchor">{ctaLinkDetails.name} &#8594;</a>
									</Link>
								)}
							</AccordionItemPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default ProductAccordion;
