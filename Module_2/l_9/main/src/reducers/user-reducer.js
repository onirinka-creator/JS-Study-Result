export const initialUserState = {
	name: 'John',
	age: 20,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case 'CHANGE_USER':
			return { ...state, ...action.payload };
		case 'INCREASE_AGE':
			return { ...state, age: state.age + action.payload };
		case 'RESET_AGE':
			return { ...state, age: initialUserState.age };
		default:
			return state;
	}
};
