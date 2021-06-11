import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const ChromeExtension: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 435.82 437.46"
			width={width}
			height={height}
		>
			<defs>
				<style>{`.prefix__cls-1{fill:${fill}}.prefix__cls-2{fill:#fff}`}</style>
			</defs>
			<g id="prefix__Layer_2" data-name="Layer 2">
				<g id="prefix__Layer_1-2" data-name="Layer 1">
					<path
						className="prefix__cls-1"
						d="M217.34 0s128.48-5.74 196.57 123.38H206.42s-39.19-1.29-72.6 
						46.25c-9.63 19.92-19.91 40.47-8.34 80.94C108.77 222.31 36.82 97 
						36.82 97S87.58 5.18 217.34 0z"
					/>
					<path
						className="prefix__cls-1"
						d="M407.22 327.87S348 442 202.11 436.4c18-31.14 103.77-179.68 
						103.77-179.68s20.71-33.29-3.75-86C289.7 152.43 277 133.25 236.21 123c32.84-.33
						 177.29 0 177.29 0s54.17 89.93-6.28 204.87z"
					/>
					<path
						className="prefix__cls-1"
						d="M28.37 328.74S-40.85 220.34 37 96.83l103.66 179.72s18.47 34.58 76.34 
						39.76c22.06-1.61 45-3 74.28-33.23-16.13 28.6-88.67 153.52-88.67 153.52S97.68 
						438.56 28.37 328.74z"
					/>
					<path
						className="prefix__cls-2"
						d="M202.11 437.46l29.18-121.79s32.09-2.51 59-32c-16.71 29.33-88.18 153.79-88.18 153.79z"
					/>
					<path
						className="prefix__cls-2"
						d="M119.59 220.09a97.22 97.22 0 1197.22 97.22 97.21 97.21 0 01-97.22-97.22z"
					/>
					<path
						d="M135.86 220.09a80.95 80.95 0 1180.95 81 80.94 80.94 
						0 01-80.95-81z"
						fill={fill}
						opacity={0.4}
					/>
					<path
						className="prefix__cls-2"
						d="M413.5 123l-120.18 35.28s-18.12-26.6-57.11-35.28c33.79-.1 177.29 0 177.29 
						0zM123.14 246.2C106.25 217 36.83 97 36.83 97l89 88.07s-9.15 18.82-5.68 45.7z"
					/>
				</g>
			</g>
		</svg>
	);
};

export default ChromeExtension;
