import styles from './list.module.css';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../actions';

export const ListItem = ({ todo }) => {
	const dispatch = useDispatch();
	return (
		<li
			className={[styles.listItem, todo.completed ? styles.completed : ''].join(' ')}
			onClick={() => dispatch(toggleTodo(todo.id))}
		>
			<p>
				{todo.completed && <span className={styles.check}>✔</span>}
				<span className={styles.todoText}>{todo.text}</span>
			</p>
			{
				<button className={styles.deleteButton} onClick={() => dispatch(deleteTodo(todo.id))}>
					✕
				</button>
			}
		</li>
	);
};
