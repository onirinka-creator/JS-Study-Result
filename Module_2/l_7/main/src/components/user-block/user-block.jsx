import { UserPersonalInfo, UserContacts } from './components';
import styles from './user-block.module.css';

export const UserBlock = () => {
	return (
		<div className={styles.userBlock}>
			<h1 className={styles.title}>User</h1>
			<div className={styles.sections}>
				<UserPersonalInfo />
				<UserContacts />
			</div>
		</div>
	);
};
