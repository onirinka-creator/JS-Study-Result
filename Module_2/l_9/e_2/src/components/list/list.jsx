import styles from './list.module.css';
import { ListItem } from './list-item';
import { ListInput } from './list-input';
import { useSelector } from 'react-redux';

export const List = () => {
	const todos = useSelector((state) => state.todosState.todos);
	return (
		<ul className={styles.list}>
			<ListInput />
			{todos.map((todo) => (
				<ListItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
