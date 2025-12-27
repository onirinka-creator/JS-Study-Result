import styles from './App.module.css';
import { Field } from './Game/Field/Field.jsx';
import { InformationLayout } from './Game/Information/InformationLayout.jsx';
import { Overlay } from './Game/Overlay/Overlay.jsx';
import { useSelector } from 'react-redux';

const App = () => {
	const isWin = useSelector((state) => state.isWin);
	const isDraw = useSelector((state) => state.isDraw);

	return (
		<div id={styles.app}>
			<InformationLayout />
			<Field />
			{isWin || isDraw ? <Overlay /> : null}
		</div>
	);
};
export default App;
