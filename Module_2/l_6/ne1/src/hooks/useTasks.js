import { useEffect, useState } from 'react';
import * as tasksApi from '../api/tasksApi';

export const useTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const loadTasks = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const data = await tasksApi.getTasks();
			setTasks(data.reverse());
		} catch (err) {
			setError(err.message || 'Failed to load tasks');
		} finally {
			setIsLoading(false);
		}
	};

	const retry = () => {
		loadTasks();
	};

	useEffect(() => {
		loadTasks();
	}, []);

	const addTask = async (text) => {
		if (text.trim() === '' || tasks.find((t) => t.text === text)) return;

		const taskToAdd = {
			id: String(Date.now()),
			text: text,
			completed: false,
		};

		setTasks((prev) => [taskToAdd, ...prev]);
		await tasksApi.createTask(taskToAdd);
	};

	const updateTask = async (id, text) => {
		const taskToUpdate = tasks.find((task) => task.id === id);
		if (!taskToUpdate) return;

		const updatedTask = { ...taskToUpdate, text: text };
		setTasks((prev) => prev.map((prevTask) => (prevTask.id === id ? updatedTask : prevTask)));

		await tasksApi.updateTask(id, updatedTask);
	};

	const deleteTask = async (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
		await tasksApi.deleteTask(id);
	};

	const toggleTask = async (id) => {
		const taskToToggle = tasks.find((task) => task.id === id);
		if (!taskToToggle) return;

		const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
		setTasks((prev) => prev.map((prevTask) => (prevTask.id === id ? updatedTask : prevTask)));

		await tasksApi.updateTask(id, updatedTask);
	};

	return { tasks, isLoading, error, retry, addTask, toggleTask, updateTask, deleteTask };
};
