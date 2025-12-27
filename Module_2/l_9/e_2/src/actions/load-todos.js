import { getTodos } from '../server/server';

export const loadTodos = () => (dispatch) => {
	dispatch({ type: 'LOAD_TODOS_START' });

	return getTodos()
		.then((todos) => dispatch({ type: 'LOAD_TODOS_SUCCESS', payload: todos.reverse() }))
		.catch((error) => dispatch({ type: 'LOAD_TODOS_ERROR', payload: error.message }));
};
