import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask, deleteTask } from '../../api/tasksApi';
import { Loader } from '../../components/Loader/Loader';
import styles from './task-page.module.css';

export const TaskPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [task, setTask] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState('');
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		const fetchTask = async () => {
			try {
				setIsLoading(true);
				const data = await getTaskById(id);
				setTask(data);
				setEditText(data.text);
			} catch {
				setNotFound(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchTask();
	}, [id]);

	useEffect(() => {
		if (notFound) {
			navigate('/404', {
				replace: true,
				state: { message: 'The task you are looking for does not exist.' },
			});
		}
	}, [notFound, navigate]);

	const handleToggleComplete = async () => {
		try {
			const updated = await updateTask(id, { ...task, completed: !task.completed });
			setTask(updated);
		} catch (err) {
			console.error('Failed to toggle task:', err);
		}
	};

	const handleSave = async () => {
		if (!editText.trim()) return;
		try {
			const updated = await updateTask(id, { ...task, text: editText.trim() });
			setTask(updated);
			setIsEditing(false);
		} catch {
			setNotFound(true);
		}
	};

	const handleDelete = async () => {
		try {
			await deleteTask(id);
			navigate('/');
		} catch (err) {
			console.error('Failed to delete task:', err);
		}
	};

	if (isLoading || notFound) {
		return (
			<div className={styles.container}>
				<Loader />
			</div>
		);
	}

	if (!task) {
		return null;
	}

	return (
		<div className={styles.container}>
			<button className={styles.backBtn} onClick={() => navigate('/')}>
				← Back to Tasks
			</button>

			<div className={styles.taskCard}>
				<div className={styles.header}>
					<div className={styles.statusBadge} data-completed={task.completed}>
						{task.completed ? '✓ Completed' : '○ Pending'}
					</div>
					<span className={styles.taskId}>Created at: {new Date(Number(task.id)).toLocaleString()}</span>
				</div>

				<div className={styles.content}>
					{isEditing ? (
						<textarea
							className={styles.editArea}
							value={editText}
							onChange={(e) => setEditText(e.target.value)}
							autoFocus
							onKeyDown={(e) => {
								if (e.key === 'Escape') {
									setEditText(task.text);
									setIsEditing(false);
								}
							}}
						/>
					) : (
						<p className={styles.taskText}>{task.text}</p>
					)}
				</div>

				<div className={styles.actions}>
					<button className={styles.toggleBtn} onClick={handleToggleComplete} data-completed={task.completed}>
						{task.completed ? 'Mark Incomplete' : 'Mark Complete'}
					</button>

					{isEditing ? (
						<>
							<button className={styles.saveBtn} onClick={handleSave}>
								Save
							</button>
							<button
								className={styles.cancelBtn}
								onClick={() => {
									setEditText(task.text);
									setIsEditing(false);
								}}
							>
								Cancel
							</button>
						</>
					) : (
						<button className={styles.editBtn} onClick={() => setIsEditing(true)}>
							Edit
						</button>
					)}

					<button className={styles.deleteBtn} onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};
