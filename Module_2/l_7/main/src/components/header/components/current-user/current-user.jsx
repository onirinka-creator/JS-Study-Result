import styles from './current-user.module.css';
import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const CurrentUser = () => {
	const { userData } = useContext(AppContext);
	const { name } = userData;

	return (
		<div className={styles.currentUser}>
			<span className={styles.label}>Current user:</span>
			<span className={styles.name}>{name}</span>
		</div>
	);
};
