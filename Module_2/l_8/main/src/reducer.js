const initialState = {};

export const appUserDataReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return { ...state, age: payload };
		}
		default:
			return state;
	}
};
