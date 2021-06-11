import React from 'react';
import {
	TwitterShareButton,
	FacebookShareButton,
	LinkedinShareButton
} from 'react-share';

/* Styles */
import styles from './index.module.scss';

/* Components */
import TwitterLogo from '../../../components/Icons/SocialIcons/Twitter';
import Facebook from '../../../components/Icons/SocialIcons/Facebook';
import LinkedIn from '../../../components/Icons/SocialIcons/LinkedIn';

interface Props {
	pageUrl: string;
	title: string;
}

const ShareBlogSection: React.FC<Props> = (props) => {
	const { pageUrl, title } = props;

	const formatPageTitleForShare = `${title}.\n`;

	return (
		<section className={`page-container ${styles.shareBlogs}`}>
			<h3>Don&apos;t forget to share this post</h3>
			<div className={styles.shareLinksWrapper}>
				<TwitterShareButton
					url={pageUrl}
					title={formatPageTitleForShare}
					className={styles.shareButton}
				>
					<TwitterLogo width={20} height={20} fill="#349AF8" />
				</TwitterShareButton>

				<FacebookShareButton
					url={pageUrl}
					className={styles.shareButton}
					quote={formatPageTitleForShare}
				>
					<Facebook width={20} height={20} fill="#349AF8" />
				</FacebookShareButton>

				<LinkedinShareButton
					url={pageUrl}
					title={formatPageTitleForShare}
					source="Amazon Product Research Tools for FBA Sellers| Sellgo"
					className={styles.shareButton}
				>
					<LinkedIn width={20} height={20} fill="#349AF8" />
				</LinkedinShareButton>
			</div>
		</section>
	);
};

export default ShareBlogSection;
