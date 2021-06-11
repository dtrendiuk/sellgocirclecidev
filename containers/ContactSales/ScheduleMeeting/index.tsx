import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import Dropdown from 'react-dropdown';
import validator from 'validator';
import { Element } from 'react-scroll';
import axios from 'axios';
import Modal from 'react-modal';

/* Styling */
import styles from './index.module.scss';

/* Components */
import FormInput from '../../../components/FormInput';
import FormSubmitConfirm from '../../../components/FormSubmitConfirm';

/* Constants */
import {
	defaultPhoneCode,
	employSizeList,
	countryPhoneCodeList
} from '../../../constants';

/* App Config */
import AppConfig from '../../../config';

interface Props {}

const ScheduleMeeting: React.FC<Props> = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		countryCode: defaultPhoneCode,
		phoneNumber: '',
		email: '',
		company: '',
		website: '',
		companySize: employSizeList[0].value,
		message: ''
	});

	const [formDataError, setFormDataError] = useState({
		firstNameErr: false,
		lastNameErr: false,
		emailErr: false,
		phoneNumberErr: false,
		companyErr: false,
		websiteErr: false,
		messageErr: false
	});

	const [openSubmitConfirm, setOpenSubmitConfirm] = useState(false);

	/* Handler for event changes */
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevState) => {
			return {
				...prevState,
				[name]: value
			};
		});
	};

	/* Handler for company size change */
	const handleCompanySizeChange = (selectedOption: any) => {
		setFormData((prevState) => {
			return {
				...prevState,
				companySize: selectedOption.value
			};
		});
	};

	/* Handler for countrycode size change */
	const handleCountryCodeChange = (selectedOption: any) => {
		setFormData((prevState) => {
			return {
				...prevState,
				countryCode: selectedOption
			};
		});
	};

	const {
		firstName,
		lastName,
		email,
		phoneNumber,
		company,
		website,
		companySize,
		countryCode,
		message
	} = formData;

	const {
		firstNameErr,
		lastNameErr,
		phoneNumberErr,
		emailErr,
		companyErr,
		websiteErr,
		messageErr
	} = formDataError;

	// mounting for submision confirmation modal
	useEffect(() => {
		Modal.setAppElement('#formSubmitConfirm');
	}, []);

	/* Effects for Email validation */
	useEffect(() => {
		if (email.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					emailErr: !validator.isEmail(email.trim())
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					emailErr: false
				};
			});
		}
	}, [email]);

	/* Effect for First Name Validation */
	useEffect(() => {
		if (firstName.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					firstNameErr: !validator.isAlpha(firstName)
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					firstNameErr: false
				};
			});
		}
	}, [firstName]);

	/* Effect for Last Name Validation */
	useEffect(() => {
		if (lastName.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					lastNameErr: !validator.isAlpha(lastName)
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					lastNameErr: false
				};
			});
		}
	}, [lastName]);

	/* Effect for Phone Number Validation */
	useEffect(() => {
		if (phoneNumber.trim().length > 0) {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					phoneNumberErr: !validator.isMobilePhone(phoneNumber)
				};
			});
		} else {
			setFormDataError((prevErr) => {
				return {
					...prevErr,
					phoneNumberErr: false
				};
			});
		}
	}, [phoneNumber]);

	/* Effect for Company Name Validation */
	useEffect(() => {
		if (company.length > 0) {
			setFormDataError((prevState) => {
				return {
					...prevState,
					companyErr: company.trim().length === 0
				};
			});
		} else {
			setFormDataError((prevState) => {
				return {
					...prevState,
					companyErr: false
				};
			});
		}
	}, [company]);

	/* Effect for Website URL Validation */
	useEffect(() => {
		if (website.length > 0) {
			setFormDataError((prevState) => {
				return {
					...prevState,
					websiteErr: !validator.isURL(website)
				};
			});
		} else {
			setFormDataError((prevState) => {
				return {
					...prevState,
					websiteErr: false
				};
			});
		}
	}, [website]);

	/* Clear the form data */
	const clearForm = () => {
		setFormData({
			firstName: '',
			lastName: '',
			countryCode: defaultPhoneCode,
			phoneNumber: '',
			email: '',
			company: '',
			website: '',
			companySize: employSizeList[0].value,
			message: ''
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('email', email);
		formData.append('firstname', firstName);
		formData.append('lastname', lastName);
		formData.append('phone', `${countryCode.value}-${phoneNumber}`);
		formData.append('company', company);
		formData.append('website', website);
		formData.append('numemployees', companySize);
		formData.append('message', message);

		try {
			const URL = `${AppConfig.API_URL}/sellers/create-hubspot`;
			const response = await axios.post(URL, formData);
			if (response.status === 201) {
				clearForm();
				setOpenSubmitConfirm(true);
			}
		} catch (err) {
			console.error('Error Sending data to hubspot');
			clearForm();
		}
	};

	return (
		<>
			<section className={`page-container ${styles.scheduleMeetingSection}`}>
				<Element
					className={styles.scheduleMeetingWrapper}
					name="chooseTimeAndDate"
				>
					<h2 className="secondary-heading">Schedule a Meeting</h2>
					<p>
						To meet with our Sales Team, please fill out the form below then
						select a date and time that works best for you.
					</p>

					<form className={styles.scheduleForm} onSubmit={handleSubmit}>
						<FormInput
							className={styles.formInput}
							label="First Name *"
							id="firstName"
							type="text"
							name="firstName"
							onChange={handleChange}
							value={firstName}
							autoComplete="off"
							required
							hasError={firstNameErr}
							errorMessage="Invalid First Name"
						/>

						<FormInput
							className={styles.formInput}
							label="Last Name *"
							id="lastName"
							type="text"
							name="lastName"
							onChange={handleChange}
							value={lastName}
							autoComplete="off"
							required
							hasError={lastNameErr}
							errorMessage="Invalid Last Name"
						/>

						<div className={styles.dropdownWrapper}>
							<label> Country Code *</label>
							<Select
								defaultValue={defaultPhoneCode}
								options={countryPhoneCodeList}
								className={styles.countrySelect}
								classNamePrefix="dropdown"
								id="dropdown"
								onChange={handleCountryCodeChange}
								value={countryCode}
							/>
						</div>

						<FormInput
							className={styles.formInput}
							label="Phone Number *"
							id="phoneNumber"
							type="text"
							name="phoneNumber"
							onChange={handleChange}
							value={phoneNumber}
							autoComplete="off"
							required
							hasError={phoneNumberErr}
							errorMessage="Invalid Phone Number"
						/>

						<FormInput
							className={styles.formInput}
							label="Email *"
							id="email"
							type="email"
							name="email"
							onChange={handleChange}
							value={email}
							autoComplete="off"
							required
							hasError={emailErr}
							errorMessage="Invalid Email"
						/>

						<FormInput
							className={styles.formInput}
							label="Company *"
							id="company"
							type="text"
							name="company"
							onChange={handleChange}
							value={company}
							autoComplete="off"
							required
							hasError={companyErr}
							errorMessage="Please enter company name"
						/>

						<FormInput
							className={styles.formInput}
							label="Website *"
							id="website"
							type="text"
							name="website"
							onChange={handleChange}
							value={website}
							autoComplete="off"
							required
							hasError={websiteErr}
							errorMessage="Please enter valid URL"
						/>

						<div className={styles.formInput}>
							<label># of Employees</label>
							<Dropdown
								options={employSizeList}
								onChange={handleCompanySizeChange}
								className={styles.selectDropdown}
								placeholderClassName={styles.selectDropdown__placeholder}
								controlClassName={styles.selectDropdown__control}
								menuClassName={styles.selectDropdown__menu}
								value={companySize}
								arrowClosed={
									<Image
										src="/dropdownArrow.svg"
										width={10}
										height={10}
										alt="Dropdown Arrow"
									/>
								}
								arrowOpen={
									<Image
										src="/dropdownArrow.svg"
										width={10}
										height={10}
										alt="Dropdown Arrow"
									/>
								}
							/>
						</div>

						<div className={`${styles.formInput} ${styles.formInput__message}`}>
							<label htmlFor="">
								What are you looking to accomplish on this call *
							</label>
							<textarea
								name="message"
								id="message"
								minLength={1}
								cols={30}
								rows={10}
								value={message}
								onChange={handleChange}
								required
							/>
							{messageErr && <small>Please leave us a message</small>}
						</div>

						<p className={styles.formSubmitInfo}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip
						</p>

						<button
							type="submit"
							className="ctabutton ctabutton--primary ctabutton--medium"
							disabled={
								firstNameErr ||
								lastNameErr ||
								emailErr ||
								phoneNumberErr ||
								companyErr ||
								websiteErr ||
								messageErr
							}
						>
							Submit
						</button>
					</form>
				</Element>
			</section>

			<div id="formSubmitConfirm"></div>

			<Modal
				isOpen={openSubmitConfirm}
				onRequestClose={() => setOpenSubmitConfirm(false)}
				className="modal"
				overlayClassName="modalOverlay"
			>
				<FormSubmitConfirm
					heading="You're all set"
					body="Your request to talk with our sales team has been confirmed!."
					ending="Our sales team will be in touch with you soon."
				/>
			</Modal>
		</>
	);
};

export default ScheduleMeeting;
