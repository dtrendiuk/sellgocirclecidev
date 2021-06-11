import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const AffiliateProgram: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 384.14"
			width={width}
			height={height}
		>
			<g data-name="Layer 2">
				<path
					d="M483.9 274.7L334.6 153.5l-30 27.5c-40.6 37.1-86.8 11.9-101.7-4.4a72 
					72 0 014.4-101.7L289.1 0h-83.8a31.94 31.94 0 00-22.6 9.4L128 64H16A16 
					16 0 000 80v191.9a16 16 0 0016 16h130.3l90.5 81.9a64 64 0 0090-9.3l.2-.2 
					17.9 15.5a37.16 37.16 0 0052.3-5.4l31.4-38.6 5.4 4.4a32 32 0 0045-4.7l9.5-11.7a32.06
					 32.06 0 00-4.6-45.1zM624 64H512L457.4 9.4A31.94 31.94 0 00434.8 0h-85.9a32 32 
					 0 00-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4a39.69 39.69 0 00-2.1 56c9.6 10.5 35 21.6 
					 56.1 2.7.1-.1.3-.1.4-.2l53-48.5 27-24.7a16 16 0 0121.6 23.6l-26.1 23.9 145.6 
					 118.2a63.36 63.36 0 0122.2 37.9H624a16 16 0 0016-16V79.9A16 16 0 00624 64z"
					fill={fill}
					data-name="Layer 1"
				/>
			</g>
		</svg>
	);
};

export default AffiliateProgram;
