import { OverlayLayout } from './OverlayLayout';

export const Overlay = ({
	overlayMessage,
	setOverlayMessage,
	setField,
	setCurrentPlayer,
	isWin,
	setIsWin,
	isDraw,
	setIsDraw,
}) => {
	function handleButton() {
		if (isWin || isDraw) {
			setOverlayMessage('');
			setField(['', '', '', '', '', '', '', '', '']);
			setCurrentPlayer('X');
			setIsWin(false);
			setIsDraw(false);
		} else {
			setOverlayMessage('');
		}
	}

	return (
		<OverlayLayout
			overlayMessage={overlayMessage}
			isWin={isWin}
			isDraw={isDraw}
			handleButton={handleButton}
		/>
	);
};
