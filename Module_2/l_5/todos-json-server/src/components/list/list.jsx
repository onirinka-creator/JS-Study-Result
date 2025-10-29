import styles from './list.module.css';
import { ListItem } from './list-item';
import { ListInput } from './list-input';

export const List = ({ todos, onAdd, onToggle, onDelete }) => {
	return (
		<ul className={styles.list}>
			<ListInput onAdd={onAdd} />
			{todos.map((todo) => (
				<ListItem
					key={todo.id}
					todo={todo}
					onToggle={() => onToggle(todo.id)}
					onDelete={() => onDelete(todo.id)}
				/>
			))}
		</ul>
	);
};
