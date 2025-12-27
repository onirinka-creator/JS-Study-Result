import { OverlayLayout } from './OverlayLayout';
import { useSelector, useDispatch } from 'react-redux';

export const Overlay = () => {
	const { isWin, isDraw, overlayMessage } = useSelector((state) => ({
		isWin: state.isWin,
		isDraw: state.isDraw,
		overlayMessage: state.overlayMessage,
	}));
	const dispatch = useDispatch();
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
