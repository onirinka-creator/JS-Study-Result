import { Link, useLocation } from 'react-router-dom';
import styles from './not-found-page.module.css';

export const NotFoundPage = () => {
	const { message } = useLocation().state || {
		message: "The page you're looking for doesn't exist or has been moved.",
	};
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.errorCode}>404</div>
				<h1>Page Not Found</h1>
				<p>{message}</p>
				<Link to="/" className={styles.homeLink}>
					← Back to Tasks
				</Link>
			</div>
		</div>
	);
};
