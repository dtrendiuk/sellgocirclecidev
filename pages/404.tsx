import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Page404: React.FC<Props> = () => {
	return (
		<main className="errorPage">
			<div className="page-container errorPageWrapper">
				<h1>Sorry</h1>
				<h2> we couldn&apos;t find that page (404)</h2>
				<p>
					Please go back and try again or go to{' '}
					<Link href="/" passHref>
						<a className="anchor">sellgo&apos;s home page</a>
					</Link>
				</p>

				<div className="errorTofuWrapper">
					<Image src="/errorTofu.png" width={400} height={331} />
					<p>Toffu</p>
				</div>
			</div>
		</main>
	);
};

export default Page404;
