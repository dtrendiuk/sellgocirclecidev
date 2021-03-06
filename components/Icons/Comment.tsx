import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Comment: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<path
				d="M36.111 13.889C36.111 6.215 28.03 0 18.056 0S0 6.215 0 13.889a11.776 11.776 0 
				003.3 7.986 19.538 19.538 0 01-3.109 4.731.69.69 0 00-.13.755.68.68 0 00.634.417 
				15.284 15.284 0 007.7-2.17 22.088 22.088 0 009.661 2.17c9.974 0 18.055-6.215 18.055-13.889zm10.59 
				19.1A11.76 11.76 0 0050 25c0-5.807-4.644-10.781-11.224-12.856a12.9 12.9 0 01.113 1.745c0 9.193-9.349 
				16.667-20.833 16.667a26.027 26.027 0 01-2.752-.165c2.734 4.991 9.158 8.5 16.641 8.5a21.967 21.967 0 
				009.661-2.17 15.284 15.284 0 007.7 2.17.684.684 0 00.634-.417.7.7 0 00-.13-.755 19.331 19.331 0 
				01-3.11-4.733z"
				fill={fill}
			/>
		</svg>
	);
};

export default Comment;
