import styles from './App.module.css';
import { Field } from './Game/Field/Field.jsx';
import { InformationLayout } from './Game/Information/InformationLayout.jsx';
import { Overlay } from './Game/Overlay/Overlay.jsx';
import { useReduxState } from './redux-manager.js';

const App = () => {
	const { isWin, isDraw } = useReduxState();
	return (
		<div id={styles.app}>
			<InformationLayout />
			<Field />
			{isWin || isDraw ? <Overlay /> : null}
		</div>
	);
};
export default App;
