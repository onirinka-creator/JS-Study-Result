const initialState = {
	currentPlayer: 'X',
	isWin: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
	overlayMessage: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: action.payload };
		case 'SET_IS_WIN':
			return { ...state, isWin: action.payload };
		case 'SET_IS_DRAW':
			return { ...state, isDraw: action.payload };
		case 'SET_FIELD':
			return { ...state, field: action.payload };
		case 'SET_OVERLAY_MESSAGE':
			return { ...state, overlayMessage: action.payload };
		case 'RESET_GAME':
			return initialState;
		default:
			return state;
	}
};
