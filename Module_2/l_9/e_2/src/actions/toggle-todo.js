import { updateTodos } from '../server/server';

export const toggleTodo = (id) => (dispatch, getState) => {
	const todoToToggle = getState().todosState.todos.find((t) => t.id === id);
	if (!todoToToggle) return null;
	dispatch({ type: 'TOGGLE_TODO_SUCCESS', payload: id });
	return updateTodos(id, { completed: !todoToToggle.completed }).catch(() =>
		dispatch({ type: 'TOGGLE_TODO_SUCCESS', payload: id }),
	);
};
