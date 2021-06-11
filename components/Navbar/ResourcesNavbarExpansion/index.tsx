import React from 'react';
import { v4 as uuid } from 'uuid';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { resourcesNavigationList } from './data';
import GroupedNavLink from '../../GroupedNavLinks';

interface Props {
	className: string;
}

const ResourcesNavBarExpansion: React.FC<Props> = (props) => {
	const { className } = props;
	return (
		<div className={className}>
			<div className={styles.resourcesNavbar}>
				{resourcesNavigationList.map((list: any) => {
					return (
						<GroupedNavLink
							key={uuid()}
							{...list}
							className={styles.resourcesGroupedLinks}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ResourcesNavBarExpansion;
