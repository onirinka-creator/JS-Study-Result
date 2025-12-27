const initialState = {
	isLoading: true,
	error: null,
};

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_TODOS_START':
			return { ...state, isLoading: true };
		case 'LOAD_TODOS_SUCCESS':
			return { ...state, isLoading: false, error: null };
		case 'LOAD_TODOS_ERROR':
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
