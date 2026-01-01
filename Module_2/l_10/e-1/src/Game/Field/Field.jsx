import { connect } from 'react-redux';
import { Component } from 'react';

// export const Field = () => {
// 	const { currentPlayer, field, isWin } = useSelector((state) => ({
// 		currentPlayer: state.currentPlayer,
// 		field: state.field,
// 		isWin: state.isWin,
// 	}));
// 	const dispatch = useDispatch();
// 	function changeCurrentPlayer() {
// 		dispatch({
// 			type: 'SET_CURRENT_PLAYER',
// 			payload: currentPlayer === 'X' ? '0' : 'X',
// 		});
// 	}

// 	function handleCell(i) {
// 		if (field[i] === '' && !isWin) {
// 			const newField = [...field];
// 			newField[i] = currentPlayer;
// 			dispatch({ type: 'SET_FIELD', payload: newField });
// 			if (handleIsWin(newField)) {
// 				dispatch({ type: 'SET_IS_WIN', payload: true });
// 				dispatch({
// 					type: 'SET_OVERLAY_MESSAGE',
// 					payload: `${currentPlayer} WIN`,
// 				});
// 				return null;
// 			} else if (!newField.some((cell) => cell === '')) {
// 				dispatch({ type: 'SET_IS_DRAW', payload: true });
// 				dispatch({ type: 'SET_OVERLAY_MESSAGE', payload: 'DRAW!' });
// 			} else {
// 				changeCurrentPlayer();
// 			}
// 		}
// 	}

// 	function handleIsWin(currentField = field) {
// 		const WIN_PATTERNS = [
// 			[0, 1, 2],
// 			[3, 4, 5],
// 			[6, 7, 8],
// 			[0, 3, 6],
// 			[1, 4, 7],
// 			[2, 5, 8],
// 			[0, 4, 8],
// 			[6, 4, 2],
// 		];
// 		const win = WIN_PATTERNS.some(
// 			(pattern) =>
// 				pattern.every((i) => currentField[i] === 'X') ||
// 				pattern.every((i) => currentField[i] === '0'),
// 		);
// 		return win;
// 	}

// 	return <FieldLayout handleCell={handleCell} field={field} />;
// };

const FieldContainer = class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.changeCurrentPlayer = this.changeCurrentPlayer.bind(this);
		this.handleIsWin = this.handleIsWin.bind(this);
		this.handleCell = this.handleCell.bind(this);
	}

	changeCurrentPlayer() {
		this.props.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: this.props.currentPlayer === 'X' ? '0' : 'X',
		});
	}

	handleIsWin(newField) {
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
		return WIN_PATTERNS.some(
			(pattern) =>
				pattern.every((i) => newField[i] === 'X') ||
				pattern.every((i) => newField[i] === '0'),
		);
	}

	handleCell(i) {
		if (this.props.field[i] === '' && !this.props.isWin) {
			const newField = [...this.props.field];
			newField[i] = this.props.currentPlayer;
			this.props.dispatch({ type: 'SET_FIELD', payload: newField });
			if (this.handleIsWin(newField)) {
				this.props.dispatch({ type: 'SET_IS_WIN', payload: true });
				this.props.dispatch({
					type: 'SET_OVERLAY_MESSAGE',
					payload: `${this.props.currentPlayer} WIN`,
				});
				return null;
			} else if (!newField.some((cell) => cell === '')) {
				this.props.dispatch({ type: 'SET_IS_DRAW', payload: true });
				this.props.dispatch({ type: 'SET_OVERLAY_MESSAGE', payload: 'DRAW!' });
			} else {
				this.changeCurrentPlayer();
			}
		}
	}

	render() {
		return (
			<ul className="grid grid-cols-3 grid-rows-3 gap-0">
				{this.props.field.map((cell, i) => {
					return (
						<li
							key={i}
							className="border border-gray-700 w-20 h-20 flex items-center justify-center text-2xl font-bold"
							onClick={() => {
								this.handleCell(i);
							}}
						>
							<p>{cell}</p>
						</li>
					);
				})}
			</ul>
		);
	}
};

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isWin: state.isWin,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch,
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
