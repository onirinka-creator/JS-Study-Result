import styles from './app.module.css';
import { List } from './components/list/list';
import { Loader } from './components/loader/loader';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTodos } from './actions/load-todos';

const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.loadingState.isLoading);
	const error = useSelector((state) => state.loadingState.error);
	useEffect(() => {
		dispatch(loadTodos());
	}, [dispatch]);
	return (
		<div className={styles.app}>
			{isLoading ? <Loader /> : <List />}
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};

export default App;
