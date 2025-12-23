import { appUserDataReducer } from './reducer';

const createStore = (reducer) => {
	let state;

	return {
		dispatch: (action) => {
			state = reducer(state, action);
		},
		getState: () => state,
	};
};

export const appUserDataStore = createStore(appUserDataReducer);

appUserDataStore.dispatch({});
