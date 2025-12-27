import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer, loadingReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	combineReducers({ todosState: todosReducer, loadingState: loadingReducer }),
	composeEnhancers(applyMiddleware(thunk)),
);
