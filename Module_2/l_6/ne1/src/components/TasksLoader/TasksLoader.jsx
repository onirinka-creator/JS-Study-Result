import styles from './task-loader.module.css';

export const TasksLoader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={`${styles.skeletonTask} ${styles.first}`}>
				<div className={styles.skeletonCheckbox}></div>
				<div className={styles.skeletonText}></div>
			</div>
			<div className={`${styles.skeletonTask} ${styles.second}`}>
				<div className={styles.skeletonCheckbox}></div>
				<div className={styles.skeletonText}></div>
			</div>
			<div className={`${styles.skeletonTask} ${styles.third}`}>
				<div className={styles.skeletonCheckbox}></div>
				<div className={styles.skeletonText}></div>
			</div>
		</div>
	);
};
