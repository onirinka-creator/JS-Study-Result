import { postTodos } from '../server/server';

export const addTodo = (text) => (dispatch, getState) => {
	const todos = getState().todosState.todos;
	if (text.trim() === '' || todos.find((t) => t.text === text))
		return dispatch({ type: 'ADD_TODO_ERROR', payload: 'Todo already exists' });
	const todoToAdd = {
		id: String(Date.now()),
		text: text,
		completed: false,
	};
	dispatch({ type: 'ADD_TODO_SUCCESS', payload: todoToAdd });
	return postTodos(todoToAdd).catch((error) => dispatch({ type: 'ADD_TODO_ERROR', payload: error.message }));
};
