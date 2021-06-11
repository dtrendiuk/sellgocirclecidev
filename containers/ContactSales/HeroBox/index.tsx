import React from 'react';
import Image from 'next/image';
// import { Link } from 'react-scroll';

/* Styling */
import styles from './index.module.scss';

/* COmponents */
// import Comment from '../../../components/Icons/Comment';
// import Calender from '../../../components/Icons/Calender';

interface Props {}

const Herobox: React.FC<Props> = () => {
	return (
		<>
			<div className={styles.heroBoxWrapper}>
				<div className={`page-container ${styles.heroBox}`}>
					<div className={styles.heroBox__text}>
						<h1>
							Get in Touch With <br /> Our Sales Team
						</h1>

						<p>
							Whatever your Amazon business needs, we&apos;re here to help!
							Whether you&apos;re looking for the right tools, the perfect
							pricing plan, or simply hoping to grow your business, our Sales
							Team can assist you! Here are a few ways you can connect with us.
						</p>
					</div>

					<div className={styles.heroBox__image}>
						<Image
							src="/growTogether.png"
							width={450}
							height={420}
							alt="Contact our sales team"
							className={styles.heroImage}
						/>
					</div>
				</div>
			</div>

			{/* <div className={`page-container ${styles.heroBoxCards}`}>
				<div className={styles.contactCardsWrapper}>
					<div className={styles.contactCard}>
						<Comment width={50} height={38} fill="#808080" />
						<Link
							to="chatWithSales"
							className="ctabutton ctabutton--primary ctabutton--small"
							smooth
							offset={0}
						>
							Chat with sales
						</Link>
					</div>

					<div className={styles.contactCard}>
						<Calender width={40} height={46} fill="#808080" />
						<Link
							to="chooseTimeAndDate"
							className="ctabutton ctabutton--primary ctabutton--small"
							smooth
							offset={-20}
						>
							Choose date and time
						</Link>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Herobox;
