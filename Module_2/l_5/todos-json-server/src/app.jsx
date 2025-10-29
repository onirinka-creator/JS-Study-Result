import styles from './app.module.css';
import { useTodos } from './hooks/useTodos';
import { List } from './components/list/list';
import { Loader } from './components/loader/loader';

const App = () => {
	const { todos, isLoading, addTodo, toggleTodo, deleteTodo } = useTodos();
	return (
		<div className={styles.app}>
			{isLoading ? (
				<Loader />
			) : (
				<List todos={todos} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} />
			)}
		</div>
	);
};

export default App;
