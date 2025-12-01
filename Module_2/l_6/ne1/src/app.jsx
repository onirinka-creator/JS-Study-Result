import { Route, Routes, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { TaskPage } from './pages/TaskPage/TaskPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import styles from './app.module.css';

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/task/:id" element={<TaskPage />}></Route>
				<Route path="/404" element={<NotFoundPage />}></Route>
				<Route path="*" element={<Navigate to="/404" replace={true} />}></Route>
			</Routes>
		</div>
	);
}

export default App;
