import React from 'react';

/* Styling */
import styles from './index.module.scss';

interface Props {}

const TextLoader: React.FC<Props> = () => {
	return (
		<div className={styles.textLoader}>
			<div style={{ width: '40%' }} className={styles.loader}>
				<span className="loadIn"></span>
			</div>
			<div style={{ width: '60%' }} className={styles.loader}>
				<span className="loadIn"></span>
			</div>
			<div style={{ width: '70%' }} className={styles.loader}>
				<span className="loadIn"></span>
			</div>

			<div style={{ width: '90%' }} className={styles.loader}>
				<span className="loadIn"></span>
			</div>

			<div style={{ width: '100%' }} className={styles.loader}>
				<span className="loadIn"></span>
			</div>
		</div>
	);
};

export default TextLoader;
