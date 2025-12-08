import styles from './list.module.css';
import { ListItem } from './list-item';
import { ListInput } from './list-input';
import { useContext } from 'react';
import { TodoContext } from '../../context';

export const List = () => {
	const { todos } = useContext(TodoContext);

	return (
		<ul className={styles.list}>
			<ListInput />
			{todos.map((todo) => (
				<ListItem todo={todo} key={todo.id} />
			))}
		</ul>
	);
};
