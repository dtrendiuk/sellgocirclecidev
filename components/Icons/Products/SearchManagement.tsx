import React from 'react';

interface Props {
	width: number;
	height: number;
	fill: string;
}

const SearchManagement: React.FC<Props> = (props) => {
	const { width, height, fill } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			width={width}
			height={height}
		>
			<g data-name="Layer 2">
				<g data-name="Layer 1" fill={fill}>
					<path
						d="M336 64h-80a64 64 0 0164 64H64a64 64 0 0164-64H48a48 48 0 00-48 48v352a48 
						48 0 0048 48h288a48 48 0 0048-48V112a48 48 0 00-48-48zM96 424a23.94 23.94 0 11.12 
						0zm0-96a23.94 23.94 0 11.12 0zm0-96a23.94 23.94 0 11.12 0zm224 176a8 8 0 01-8 8H168a8 8 
						0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-96a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 
						018-8h144a8 8 0 018 8zm0-96a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8z"
						style={{
							isolation: 'isolate'
						}}
						opacity={0.4}
					/>
					<path
						d="M96 376a23.94 23.94 0 10.12 0zm0-96a23.94 23.94 0 10.12 0zm0-96a23.94 23.94 0
					 10.12 0zM256 64a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a23.94 
					 23.94 0 11.12 0z"
					/>
				</g>
			</g>
		</svg>
	);
};

export default SearchManagement;
