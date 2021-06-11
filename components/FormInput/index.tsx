import React, { memo } from 'react';

interface Props {
	label?: string;
	id: string;
	className?: string;
	hasError?: boolean;
	errorMessage?: string;
	type: 'text' | 'email' | 'password' | 'checkbox';
	name: string;
	autoComplete?: 'on' | 'off';
	placeholder?: string;
	value: string;
	required?: boolean;
	onChange: (e: any) => void;
	labelLast?: boolean;
	checked?: boolean;
}

const FormInput: React.FC<Props> = (props) => {
	const {
		label,
		className,
		hasError,
		errorMessage,
		id,
		labelLast,
		...otherProps
	} = props;

	return (
		<div className={className}>
			{labelLast ? (
				<>
					<input id={id} {...otherProps} />
					{label && <label htmlFor={id}>{label}</label>}
					{hasError && <small>{errorMessage}</small>}
				</>
			) : (
				<>
					<label htmlFor={id}>{label}</label>
					<input id={id} {...otherProps} />
					{hasError && <small>{errorMessage}</small>}
				</>
			)}
		</div>
	);
};

export default memo(FormInput);
