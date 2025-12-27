import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer, productsReducer } from './reducers';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	combineReducers({
		userState: userReducer,
		productsState: productsReducer,
	}),
	composeEnhancers(applyMiddleware(thunk)),
);
