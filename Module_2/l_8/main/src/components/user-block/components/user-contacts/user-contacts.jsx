import styles from './user-contacts.module.css';
import { appUserDataStore } from '../../../../store';

export const UserContacts = () => {
	const { email, phone } = appUserDataStore.getState();
	return (
		<div className={styles.section}>
			<h3 className={styles.sectionTitle}>Contacts</h3>
			<div className={styles.infoRow}>
				<span className={styles.label}>Email</span>
				<span className={styles.value}>{email}</span>
			</div>
			<div className={styles.infoRow}>
				<span className={styles.label}>Phone</span>
				<span className={styles.value}>{phone}</span>
			</div>
		</div>
	);
};
