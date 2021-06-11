import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Components */
import GroupedNavLink from '../../GroupedNavLinks';

/* Data */
import { productsNavigationList, productsRightPanelData } from './data';

interface Props {
	className: string;
}

const ProductsNavbarExpansion: React.FC<Props> = (props) => {
	const { className } = props;

	const handleChange = (e: any, customID: string) => {
		const tabContent = document.querySelectorAll('.tabContent');
		const tabLinks = document.querySelectorAll('.tabLinks');
		const hoverTabPanel = document.getElementById(customID);

		tabContent.forEach((tabContent: any) => {
			// eslint-disable-next-line no-param-reassign
			tabContent.style.display = 'none';
		});

		tabLinks.forEach((tabLink: any) => {
			// eslint-disable-next-line no-param-reassign
			tabLink.className = tabLink.className.replace(' active', '');
		});

		if (hoverTabPanel) {
			hoverTabPanel.style.display = 'block';
		}

		e.currentTarget.className += ' active';
	};

	return (
		<div className={className}>
			<div className={styles.productsNavbar}>
				<div className={styles.productsNavbar__left}>
					<h3>Products</h3>

					{productsNavigationList.map(
						(productListDetails: any, index: number) => {
							return (
								<div
									className={`${styles.tabLinks} tabLinks ${
										index === 0 ? 'active' : ''
									}`}
									key={uuid()}
									onMouseOver={(e: any) => {
										handleChange(e, productListDetails.hoverId);
									}}
									onFocus={(e: any) => {
										handleChange(e, productListDetails.hoverId);
									}}
									role="button"
									tabIndex={0}
								>
									<h2>{productListDetails.head}</h2>
									<p>{productListDetails.desc}</p>
								</div>
							);
						}
					)}
				</div>

				<div className={`${styles.productsNavbar__right}`}>
					{productsRightPanelData.map((panelData: any) => {
						return (
							<div id={panelData.hoverId} className="tabContent" key={uuid()}>
								<h3>{panelData.header}</h3>
								<div className={styles.groupedLinksWrapper}>
									{panelData.groupedNavLinksData.map(
										(groupLinkDetails: any, index: number) => {
											return (
												<GroupedNavLink
													key={uuid()}
													{...groupLinkDetails}
													id={index}
												/>
											);
										}
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductsNavbarExpansion;
