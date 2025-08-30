import { useState } from 'react';
import styles from './App.module.css';
import { Field } from './Game/Field/Field.jsx';
import { InformationLayout } from './Game/Information/InformationLayout.jsx';
import { Overlay } from './Game/Overlay/Overlay.jsx';

const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isWin, setIsWin] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [overlayMessage, setOverlayMessage] = useState('');

	return (
		<div id={styles.app}>
			<InformationLayout currentPlayer={currentPlayer} />
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isWin={isWin}
				setIsWin={setIsWin}
				setOverlayMessage={setOverlayMessage}
				setIsDraw={setIsDraw}
			/>
			{overlayMessage !== '' ? (
				<Overlay
					overlayMessage={overlayMessage}
					setOverlayMessage={setOverlayMessage}
					setField={setField}
					setCurrentPlayer={setCurrentPlayer}
					isWin={isWin}
					setIsWin={setIsWin}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
				/>
			) : null}
		</div>
	);
};

export default App;
