import React from 'react';

interface Props {
	width: number;
	height: number;
}

const ImageLoader: React.FC<Props> = (props) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{
				margin: 'auto',
				background: '#fff'
			}}
			width={width}
			height={height}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			display="block"
		>
			<circle cx={50} cy={50} r={0} fill="none" stroke="#fc7900">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="1s"
					values="0;27"
					keyTimes="0;1"
					keySplines="0 0.2 0.8 1"
					calcMode="spline"
					begin="0s"
				/>
				<animate
					attributeName="opacity"
					repeatCount="indefinite"
					dur="1s"
					values="1;0"
					keyTimes="0;1"
					keySplines="0.2 0 0.8 1"
					calcMode="spline"
					begin="0s"
				/>
			</circle>
			<circle cx={50} cy={50} r={0} fill="none" stroke="#f4aa74">
				<animate
					attributeName="r"
					repeatCount="indefinite"
					dur="1s"
					values="0;27"
					keyTimes="0;1"
					keySplines="0 0.2 0.8 1"
					calcMode="spline"
					begin="-0.5s"
				/>
				<animate
					attributeName="opacity"
					repeatCount="indefinite"
					dur="1s"
					values="1;0"
					keyTimes="0;1"
					keySplines="0.2 0 0.8 1"
					calcMode="spline"
					begin="-0.5s"
				/>
			</circle>
		</svg>
	);
};

export default ImageLoader;
