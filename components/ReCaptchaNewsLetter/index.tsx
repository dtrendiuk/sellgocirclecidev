import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../FormInput';
import AppConfig from '../../config';

interface Props {
	closeModal: () => void;
}

const ReCaptchaNewsLetter: React.FC<Props> = (props) => {
	const { closeModal } = props;

	const router = useRouter();

	const [email, setEmail] = useState<string>('');
	const [emailErr, setEmailErr] = useState<boolean>(false);
	const [token, setToken] = useState<string>('');

	const handleChange = (e: any) => {
		const { value } = e.target;
		setEmail(value);
	};

	const handleClick = () => {
		router.push('/privacy-policy');
		closeModal();
	};

	const handleCaptchaChange = (token: any) => {
		if (token.trim().length > 0) {
			setToken(token);
		} else {
			setToken('');
		}
	};

	const clearForm = () => {
		setEmail('');
		setEmailErr(false);
		setToken('');
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		e.stopPropagation();

		if (!token) {
			return;
		}

		try {
			const formData = new FormData();
			formData.append('email', email);
			formData.append('subscribeblog', 'true');
			formData.append('g-recaptcha-response', token);
			const response = await axios.post(
				`${AppConfig.API_URL}/sellers/create-hubspot`,
				formData
			);

			if (response && response.status === 201) {
				clearForm();
				closeModal();
			}
		} catch (err) {
			console.error('Error sending data to hubspot', err);
		}
	};

	/* Effect to validate email */
	useEffect(() => {
		if (email.trim().length > 0) {
			setEmailErr(!validator.isEmail(email));
		} else {
			setEmailErr(false);
		}
	}, [email]);

	return (
		<div className={styles.newsLetter}>
			<h1>Subscribe to Our Newsletter</h1>
			<p>
				Join our subscriber&apos;s list to get the latest update and articles
				delivered directly to your inbox.
			</p>

			<form onSubmit={handleSubmit} className={styles.newsLetterForm}>
				<FormInput
					type="text"
					placeholder="youremail@address.com"
					autoComplete="off"
					value={email}
					onChange={handleChange}
					hasError={emailErr}
					errorMessage="Enter valid email"
					id="email"
					className={styles.formInput}
					name="email"
					required
				/>

				<div className={styles.formInput}>
					<ReCAPTCHA
						sitekey={String(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)}
						theme="light"
						size="normal"
						onChange={handleCaptchaChange}
					/>
				</div>

				<button
					className={`ctabutton ctabutton--primary ctabutton--medium ${styles.subscribeCTA}`}
					type="submit"
					disabled={emailErr || !token.trim().length}
				>
					Subscribe
				</button>
			</form>

			<div className={styles.importantNotes}>
				<p>
					We&apos;re committed to your privacy. Sellgo uses the information you
					provide to us to contact you about our relevant content, products, and
					services. You may unsubscribe from these communications at any time.
				</p>
				<p>
					For more information, check out our{' '}
					<a onClick={handleClick} onKeyPress={() => {}}>
						privacy policy
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default ReCaptchaNewsLetter;
