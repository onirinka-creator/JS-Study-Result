import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ReduxRenderer } from './redux-manager.js';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ReduxRenderer store={store}>
			<App />
		</ReduxRenderer>
	</StrictMode>,
);
