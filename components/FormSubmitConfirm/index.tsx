import React from 'react';
import PaperAirplane from '../Icons/PaperAirplane';

/* Styling */
import styles from './index.module.scss';

interface Props {
	heading: string;
	body: string;
	ending: string;
}

const FormSubmitConfirm: React.FC<Props> = (props) => {
	const { heading, body, ending } = props;

	return (
		<div className={styles.formSubmitConfirm}>
			<h1>{heading}</h1>
			<div>
				<p>Welcome to the Sellgo community.</p>
				<p>{body}</p>
			</div>

			<PaperAirplane fill="#f99e4e" width={70} height={70} />

			<div>
				<small>Thank you for your request.</small>
				<small>{ending}</small>
			</div>
		</div>
	);
};

export default FormSubmitConfirm;
