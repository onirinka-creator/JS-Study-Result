import { deleteTodos } from '../server/server';

export const deleteTodo = (id) => (dispatch, getState) => {
	const todoToDelete = getState().todosState.todos.find((todo) => todo.id === id);
	dispatch({ type: 'DELETE_TODO_SUCCESS', payload: id });
	return deleteTodos(id).catch(() => dispatch({ type: 'DELETE_TODO_ERROR', payload: todoToDelete }));
};
