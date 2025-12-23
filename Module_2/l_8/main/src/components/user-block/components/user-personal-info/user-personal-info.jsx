import styles from './user-personal-info.module.css';
import { appUserDataStore } from '../../../../store';

export const UserPersonalInfo = () => {
	const { name, age } = appUserDataStore.getState();

	const onUserUpdate = () => {
		const { name, email, phone } = appUserDataStore.getState();
		const newUserData = {
			name,
			age: 76,
			email,
			phone,
		};
		appUserDataStore.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	const onUserAgeDecrease = () => {
		appUserDataStore.dispatch({ type: 'SET_USER_AGE', payload: age - 1 });
	};

	return (
		<div className={styles.section}>
			<h3 className={styles.sectionTitle}>Personal Info</h3>
			<div className={styles.infoRow}>
				<span className={styles.label}>Name</span>
				<span className={styles.value}>{name}</span>
			</div>
			<div className={styles.infoRow}>
				<span className={styles.label}>Age</span>
				<span className={styles.value}>{age}</span>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={onUserUpdate}>
					Update user
				</button>
				<button className={styles.button} onClick={onUserAgeDecrease}>
					Decrease age
				</button>
			</div>
		</div>
	);
};
