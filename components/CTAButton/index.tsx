import React from 'react';
import Link from 'next/link';

interface Props {
	type: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large';
	navigateTo: string;
	children: React.ReactNode;
	className?: string;
	asExternal?: boolean;
	newTarget?: boolean;
}

const CTAButton: React.FC<Props> = (props) => {
	const {
		navigateTo,
		type,
		size,
		children,
		className,
		asExternal,
		newTarget
	} = props;

	const baseClassName = `ctabutton`;
	const sizeClassName = `ctabutton--${size}`;
	const typeClassName = `ctabutton--${type}`;

	// render as normal <a> tag
	if (asExternal) {
		return (
			<a
				className={`${baseClassName} ${typeClassName} ${sizeClassName} ${className}`}
				href={navigateTo}
				target={newTarget ? '_blank' : ''}
				rel="noreferrer noopener"
			>
				{children}
			</a>
		);
	} else {
		return (
			<Link href={navigateTo} passHref>
				<a
					className={`${baseClassName} ${typeClassName} ${sizeClassName} ${className}`}
				>
					{children}
				</a>
			</Link>
		);
	}
};

export default CTAButton;
