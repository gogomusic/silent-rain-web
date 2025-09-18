import styles from './page.module.scss';

const Page: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wallpaper}>
				<div className={styles.title}>PARALLAX</div>
			</div>
			<div className={styles.normal}>
				<div className={styles.title}>NORMAL</div>
			</div>
		</div>
	);
};

export default Page;
