import { CurrentUser } from './components';
import styles from './header.module.css';

export const Header = () => {
	return (
		<div className={styles.header}>
			<span className={styles.title}>Info about user</span>
			<CurrentUser />
		</div>
	);
};
