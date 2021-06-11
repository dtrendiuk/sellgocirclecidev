import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

interface Props {
	className?: string;
	message: string;
}

const ContactInfo: React.FC<Props> = (props) => {
	const { className, message } = props;

	return (
		<div className={`${styles.contactInfo} ${className}`}>
			<h2>
				Not sure what plan is right for your business?
				<br />
				Send us a message!
			</h2>

			<div className={styles.capsule}>
				<p>{message}</p>
				<Link href="mailto:support@sellgo.com" passHref>
					<a className="anchor">support@sellgo.com</a>
				</Link>
			</div>
		</div>
	);
};

export default ContactInfo;
