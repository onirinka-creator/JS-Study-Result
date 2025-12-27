import { FieldLayout } from './FieldLayout';
import { useSelector, useDispatch } from 'react-redux';

export const Field = () => {
	const { currentPlayer, field, isWin } = useSelector((state) => ({
		currentPlayer: state.currentPlayer,
		field: state.field,
		isWin: state.isWin,
	}));
	const dispatch = useDispatch();
	function changeCurrentPlayer() {
		dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: currentPlayer === 'X' ? '0' : 'X',
		});
	}

	function handleCell(i) {
		if (field[i] === '' && !isWin) {
			const newField = [...field];
			newField[i] = currentPlayer;
			dispatch({ type: 'SET_FIELD', payload: newField });
			if (handleIsWin(newField)) {
				dispatch({ type: 'SET_IS_WIN', payload: true });
				dispatch({
					type: 'SET_OVERLAY_MESSAGE',
					payload: `${currentPlayer} WIN`,
				});
				return null;
			} else if (!newField.some((cell) => cell === '')) {
				dispatch({ type: 'SET_IS_DRAW', payload: true });
				dispatch({ type: 'SET_OVERLAY_MESSAGE', payload: 'DRAW!' });
			} else {
				changeCurrentPlayer();
			}
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
		return win;
	}

	return <FieldLayout handleCell={handleCell} field={field} />;
};
