import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const PaperAirplane: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 100 100`}
		>
			<path
				d="M65.084.442L1.708 37.005a3.284 3.284 0 00.3 5.907l14.535 6.1 39.284-34.623a.82.82 0 
				011.176 1.135L24.064 55.655v11.007a3.281 3.281 0 005.811 2.16l8.683-10.569L55.59 65.39a3.291 3.291 
				0 004.512-2.489l9.849-59.07A3.282 3.282 0 0065.084.442z"
				fill={fill}
			/>
		</svg>
	);
};

export default PaperAirplane;
