import styles from './app.module.css';
import { useTodos } from './hooks/useTodos';
import { List } from './components/list/list';
import { Loader } from './components/loader/loader';
import { TodoContext } from './context';

const App = () => {
	const { todos, isLoading, addTodo, toggleTodo, deleteTodo } = useTodos();
	return (
		<TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
			<div className={styles.app}>{isLoading ? <Loader /> : <List />}</div>
		</TodoContext.Provider>
	);
};

export default App;
