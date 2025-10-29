import styles from './list.module.css';

export const ListItem = ({ todo, onToggle, onDelete }) => {
	return (
		<li className={[styles.listItem, todo.completed ? styles.completed : ''].join(' ')} onClick={onToggle}>
			<p>
				{todo.completed && <span className={styles.check}>✔</span>}
				{todo.text}
			</p>
			{
				<button
					className={styles.deleteButton}
					onClick={(event) => {
						event.stopPropagation();
						onDelete();
					}}
				>
					✕
				</button>
			}
		</li>
	);
};
