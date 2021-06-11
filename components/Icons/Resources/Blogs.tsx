import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const Blogs: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 511.92 511.98"
			width={width}
			height={height}
		>
			<g data-name="Layer 2">
				<path
					d="M172.2 226.82c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 
					22A48 48 0 1196 368V120a23.94 23.94 0 00-24-24H24a23.94 23.94 0 00-24 24v248c0 
					89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 
					0a16.1 16.1 0 00-17 16v31.6a15.84 15.84 0 0015 15.9c129.4 7 233.4 112 240.9 241.5a16 16 
					0 0015.9 15h32.1a16.1 16.1 0 0016-17C503.4 139.82 372.2 8.62 209 0zm.3 96a16.13 16.13 0 
					00-17.3 16.1v32.1a15.94 15.94 0 0014.8 15.9c76.8 6.3 138 68.2 144.9 145.2a16.07 16.07 0 
					'0015.9 14.7h32.2a16.19 16.19 0 0016.1-17.3C407.5 192.6 319.4 104.5 209.3 96z"
					fill={fill}
					data-name="Layer 1"
				/>
			</g>
		</svg>
	);
};

export default Blogs;
