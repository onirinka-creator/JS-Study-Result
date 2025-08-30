import { FieldLayout } from './FieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isWin,
	setIsWin,
	setOverlayMessage,
	setIsDraw,
}) => {
	function changeCurrentPlayer() {
		setCurrentPlayer((prev) => (prev === 'X' ? '0' : 'X'));
	}

	function handleCell(i) {
		if (field[i] === '' && !isWin) {
			const newField = [...field];
			newField[i] = currentPlayer;
			setField(newField);
			if (handleIsWin(newField)) {
				setIsWin(true);
				setOverlayMessage(`${currentPlayer} WIN`);
				return null;
			} else if (!newField.some((cell) => cell === '')) {
				setIsDraw(true);
				setOverlayMessage('DRAW!');
			} else {
				changeCurrentPlayer();
			}
		} else {
			setOverlayMessage("you can't do that");
		}
	}

	function handleIsWin(currentField = field) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[6, 4, 2],
		];
		const win = WIN_PATTERNS.some(
			(pattern) =>
				pattern.every((i) => currentField[i] === 'X') ||
				pattern.every((i) => currentField[i] === '0'),
		);
		if (win) {
			setIsWin(true);
			return win;
		} else if (currentField.every((i) => i !== '')) {
			setIsDraw(true);
		}
		return win;
	}

	return <FieldLayout field={field} handleCell={handleCell} />;
};
