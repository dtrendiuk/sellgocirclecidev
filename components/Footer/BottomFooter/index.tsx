import React from 'react';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import Twitter from '../../Icons/SocialIcons/Twitter';
import LinkedIn from '../../Icons/SocialIcons/LinkedIn';
import Facebook from '../../Icons/SocialIcons/Facebook';
import Instagram from '../../Icons/SocialIcons/Instagram';
import Youtube from '../../Icons/SocialIcons/Youtube';

interface Props {}

const BottomFooter: React.FC<Props> = () => {
	return (
		<div className={styles.bottomFooter}>
			<ul className={styles.socialLinks}>
				<li>
					<a
						href="https://twitter.com/Sellgo3"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Twitter width={15} height={20} fill="#fff" />
					</a>
				</li>

				<li>
					<a
						href="https://www.facebook.com/sellgoinc/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Facebook width={15} height={20} fill="#fff" />
					</a>
				</li>

				<li>
					<a
						href="https://www.instagram.com/sellgoinc_/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Instagram width={15} height={20} fill="#fff" />
					</a>
				</li>

				<li>
					<a
						href="https://www.linkedin.com/company/sellgo/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedIn width={15} height={20} fill="#fff" />
					</a>
				</li>

				<li>
					<a
						href="https://www.youtube.com/channel/UCPIKsoPjh4uyuU1LYi4WNNA"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Youtube width={15} height={20} fill="#fff" />
					</a>
				</li>
			</ul>

			<ul className={styles.publicLinks}>
				<li>
					<Link href="/privacy-policy" passHref>
						<a className="public-footer-link">Privacy Policy</a>
					</Link>
				</li>
				<li>
					<Link href="/terms-of-use" passHref>
						<a className="public-footer-link">Terms of Use</a>
					</Link>
				</li>
				<li>
					<p className="copyright">Copyright &copy; Sellgo 2021</p>
				</li>
			</ul>
		</div>
	);
};

export default BottomFooter;
