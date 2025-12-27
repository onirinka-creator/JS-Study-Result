const initialState = {
	todos: [],
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO_SUCCESS':
			return { ...state, todos: [action.payload, ...state.todos] };
		case 'ADD_TODO_ERROR':
			return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
		case 'DELETE_TODO_SUCCESS':
			return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
		case 'DELETE_TODO_ERROR':
			return { ...state, todos: [...state.todos, action.payload.todo] };
		case 'LOAD_TODOS_SUCCESS':
			return { ...state, todos: action.payload };
		case 'LOAD_TODOS_ERROR':
			return { ...state, todos: [] };
		case 'TOGGLE_TODO_SUCCESS':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
				),
			};
		default:
			return state;
	}
};
