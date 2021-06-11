import React from 'react';
import { Element } from 'react-scroll';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const ChatWithSales: React.FC<Props> = () => {
	return (
		<section className={styles.chatWithSalesSection}>
			<Element
				name="chatWithSales"
				className={`page-container ${styles.chatWithSales}`}
			>
				<h2 className="secondary-heading">Chat Directly with Our Sales Team</h2>

				<div className={styles.chatWrapper}></div>

				<div className={styles.divider} />
			</Element>
		</section>
	);
};

export default ChatWithSales;
