import { Link } from 'react-router-dom';
import styles from './task-list-item.module.css';

export const TaskListItem = ({ task, onToggle }) => {
	const handleCheckboxChange = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onToggle(task.id);
	};

	return (
		<Link to={`/task/${task.id}`} className={`${styles.taskListItem} ${task.completed ? styles.completed : ''}`}>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={handleCheckboxChange}
				onClick={(e) => e.stopPropagation()}
				className={styles.checkbox}
			/>
			<span className={styles.taskText}>{task.text}</span>
		</Link>
	);
};
