import styles from './current-user.module.css';
import { appUserDataStore } from '../../../../store';

export const CurrentUser = () => {
	const { name } = appUserDataStore.getState();
	return (
		<div className={styles.currentUser}>
			<span className={styles.label}>Current user:</span>
			<span className={styles.name}>{name}</span>
		</div>
	);
};
