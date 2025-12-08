import { createContext } from 'react';

export const TodoContext = createContext({
	todos: [],
	isLoading: false,
	addTodo: () => {},
	toggleTodo: () => {},
	deleteTodo: () => {},
});
