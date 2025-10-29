import { useEffect, useState } from 'react';
import * as server from '../server/server';

export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const loadTodos = async () => {
		setIsLoading(true);
		try {
			const data = await server.getTodos();
			setTodos(data.reverse());
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadTodos();
		console.log(String(Date.now()));
	}, []);

	const addTodo = async (text) => {
		if (text.trim() === '' || todos.find((t) => t.text === text)) return;
		const todoToAdd = {
			id: String(Date.now()),
			text: text,
			completed: false,
		};
		setTodos((prev) => [todoToAdd, ...prev]);

		await server.postTodos(todoToAdd);
	};

	const toggleTodo = async (id) => {
		const todoToToggle = todos.find((todo) => todo.id === id);
		if (!todoToToggle) return;

		const updatedTodo = { ...todoToToggle, completed: !todoToToggle.completed };
		setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo)));

		await server.updateTodos(id, { completed: !todoToToggle.completed });
	};

	const deleteTodo = async (id) => {
		setTodos((prev) => prev.filter((prevTodos) => prevTodos.id !== id));
		await server.deleteTodos(id);
	};

	return { todos, isLoading, addTodo, toggleTodo, deleteTodo };
};
