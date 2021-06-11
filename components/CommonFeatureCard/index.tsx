import React from 'react';
import Image from 'next/image';

/* Styling */
import styles from './index.module.scss';

interface Props {
	iconImageLink: string;
	altText: string;
	title: string;
	detail: string;
}

const CommonFeatureCard: React.FC<Props> = (props) => {
	const { title, iconImageLink, altText, detail } = props;

	return (
		<div className={styles.commonFeatureCard}>
			<Image src={iconImageLink} width={40} height={40} alt={altText} />
			<h2>{title}</h2>
			<p>{detail}</p>
		</div>
	);
};

export default CommonFeatureCard;
