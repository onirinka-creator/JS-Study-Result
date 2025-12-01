import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useTasks } from '../../hooks/useTasks';
import { useCallback, useEffect, useState } from 'react';
import { TasksLoader } from '../../components/TasksLoader/TasksLoader';
import { TaskListItem } from '../../components/TaskListItem/TaskListItem';
import { TaskForm } from '../../components/TaskForm/TaskForm';
import { Sort } from '../../components/Sort/Sort';
import styles from './main-page.module.css';

export const MainPage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const { tasks, isLoading, error, retry, addTask, toggleTask, updateTask, deleteTask } = useTasks();
	const [sortedTasks, setSortedTasks] = useState([]);
	const [sortType, setSortType] = useState('newest');
	const [searchQuery, setSearchQuery] = useState('');

	const sortTasks = useCallback(() => {
		if (!tasks || tasks.length <= 1) return tasks;

		const tasksCopy = [...tasks];
		switch (sortType) {
			case 'newest':
				return tasksCopy.sort((a, b) => Number(b.id) - Number(a.id));
			case 'oldest':
				return tasksCopy.sort((a, b) => Number(a.id) - Number(b.id));
			default:
				return tasksCopy;
		}
	}, [tasks, sortType]);

	useEffect(() => {
		if (!isLoading) {
			setSortedTasks(sortTasks());
		}
	}, [isLoading, sortType, sortTasks]);

	const getFilteredTasks = () => {
		if (!sortedTasks) return [];
		if (!searchQuery.trim()) return sortedTasks;

		const query = searchQuery.toLowerCase().trim();
		return sortedTasks.filter((task) => task.text.toLowerCase().includes(query));
	};

	const filteredTasks = getFilteredTasks();

	const isSearching = searchQuery.trim().length > 0;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>My Tasks</h1>
			</div>

			<div className={styles.controls}>
				<SearchBar value={searchQuery} onChange={setSearchQuery} />
				<Sort sortType={sortType} setSortType={setSortType} />
				<button className={styles.addBtn} onClick={() => setIsFormOpen(!isFormOpen)}>
					<span>+</span> Add
				</button>
			</div>

			<TaskForm isOpen={isFormOpen} onAdd={addTask} onClose={() => setIsFormOpen(false)} />

			<div className={styles.tasksList}>
				{isLoading ? (
					<TasksLoader />
				) : error ? (
					<div className={styles.errorState}>
						<span className={styles.errorIcon}>⚠️</span>
						<h3>Can't load your tasks</h3>
						<p>{error}</p>
						<button className={styles.retryBtn} onClick={retry}>
							Try Again
						</button>
					</div>
				) : filteredTasks.length > 0 ? (
					filteredTasks.map((task) => (
						<TaskListItem
							key={task.id}
							task={task}
							onToggle={toggleTask}
							onUpdate={updateTask}
							onDelete={deleteTask}
						/>
					))
				) : (
					<div className={styles.emptyState}>
						<span className={styles.emptyIcon}>{isSearching ? '🔍' : '📭'}</span>
						<p>
							{isSearching ? `No tasks found for "${searchQuery}"` : 'No tasks yet. Add your first task!'}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
