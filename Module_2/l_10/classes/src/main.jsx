import { createRoot } from 'react-dom/client';
import './index.css';
import { App, OldApp } from './app.jsx';

createRoot(document.getElementById('root')).render(
	<>
		<App message="Function Element" />
		<OldApp message="Class Element" />
	</>,
);
