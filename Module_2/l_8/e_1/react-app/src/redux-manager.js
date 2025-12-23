import { useRef, useState } from 'react';

const reduxManager = {
	store: null,
	renderTrigger: new Map(),
	render: () => {
		reduxManager.renderTrigger.forEach((renderTrigger) => renderTrigger(Symbol()));
	},
};

export const useReduxState = () => {
	const [renderFlag, setRenderFlag] = useState(Symbol());
	const renderTriggerKey = useRef(renderFlag).current;

	reduxManager.renderTrigger.set(renderTriggerKey, setRenderFlag);

	return reduxManager.store.getState();
};

export const useReduxDispatch = () => (action) => {
	reduxManager.store.dispatch(action);
	reduxManager.render();
};

export const ReduxRenderer = ({ children, store }) => {
	reduxManager.store = store;
	return children;
};
