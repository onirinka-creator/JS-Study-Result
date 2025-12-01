import { useState } from 'react';
import styles from './task-form.module.css';

export const TaskForm = ({ isOpen, onAdd, onClose }) => {
	const [textValue, setTextValue] = useState('');

	const handleCreate = () => {
		if (textValue.trim() === '') return;

		onAdd(textValue);
		setTextValue('');
		onClose();
	};

	const handleCancel = () => {
		setTextValue('');
		onClose();
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Escape') {
			handleCancel();
		} else if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
			e.preventDefault();
			handleCreate();
		}
	};

	return (
		<div className={[styles.taskForm, isOpen ? styles.visible : styles.hidden].join(' ')}>
			<div className={styles.header}>
				<h2>New Task</h2>
			</div>
			<textarea
				value={textValue}
				onChange={(e) => setTextValue(e.target.value)}
				placeholder="What needs to be done?"
				onKeyDown={handleKeyDown}
			/>
			<div className={styles.actions}>
				<button className={styles.cancelBtn} onClick={handleCancel}>
					Cancel
				</button>
				<button className={styles.createBtn} onClick={handleCreate}>
					Create Task
				</button>
			</div>
		</div>
	);
};
