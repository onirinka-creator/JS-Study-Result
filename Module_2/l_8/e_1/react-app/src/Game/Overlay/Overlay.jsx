import { OverlayLayout } from './OverlayLayout';
import { useReduxState, useReduxDispatch } from '../../redux-manager.js';

export const Overlay = () => {
	const { isWin, isDraw, overlayMessage } = useReduxState();
	const dispatch = useReduxDispatch();
	function handleButton() {
		if (isWin || isDraw) {
			dispatch({ type: 'RESET_GAME' });
		} else {
			dispatch({ type: 'SET_OVERLAY_MESSAGE', payload: '' });
		}
	}

	return (
		<OverlayLayout
			isDraw={isDraw}
			isWin={isWin}
			overlayMessage={overlayMessage}
			handleButton={handleButton}
		/>
	);
};
