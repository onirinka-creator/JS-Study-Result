import styles from './list.module.css';
import { useContext } from 'react';
import { TodoContext } from '../../context';

export const ListItem = ({ todo }) => {
	const { toggleTodo, deleteTodo } = useContext(TodoContext);
	return (
		<li
			className={[styles.listItem, todo.completed ? styles.completed : ''].join(' ')}
			onClick={() => toggleTodo(todo.id)}
		>
			<p>
				{todo.completed && <span className={styles.check}>✔</span>}
				{todo.text}
			</p>
			{
				<button
					className={styles.deleteButton}
					onClick={(event) => {
						event.stopPropagation();
						deleteTodo(todo.id);
					}}
				>
					✕
				</button>
			}
		</li>
	);
};
