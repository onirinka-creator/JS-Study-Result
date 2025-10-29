import { useState } from 'react';
import styles from './app.module.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.app}>
		</div>
	);
}

export default App;
