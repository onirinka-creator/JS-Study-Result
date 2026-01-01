import { ControlPanel, User } from './components';
import styles from './app.module.css';

function App() {
	return (
		<div className={styles.app}>
			<ControlPanel />
			<User />
		</div>
	);
}

export default App;
