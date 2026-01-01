import { Component } from 'react';
import { connect } from 'react-redux';

// export const Overlay = () => {
// 	const { isWin, isDraw, overlayMessage } = useSelector((state) => ({
// 		isWin: state.isWin,
// 		isDraw: state.isDraw,
// 		overlayMessage: state.overlayMessage,
// 	}));
// 	const dispatch = useDispatch();
// 	function handleButton() {
// 		if (isWin || isDraw) {
// 			dispatch({ type: 'RESET_GAME' });
// 		} else {
// 			dispatch({ type: 'SET_OVERLAY_MESSAGE', payload: '' });
// 		}
// 	}

// 	return (
// 		<OverlayLayout
// 			isDraw={isDraw}
// 			isWin={isWin}
// 			overlayMessage={overlayMessage}
// 			handleButton={handleButton}
// 		/>
// 	);
// };

const OverlayContainer = class OverlayContainer extends Component {
	handleButton() {
		if (this.props.isWin || this.props.isDraw) {
			this.props.dispatch({ type: 'RESET_GAME' });
		} else {
			this.props.dispatch({ type: 'SET_OVERLAY_MESSAGE', payload: '' });
		}
	}

	render() {
		return (
			<>
				<div className="absolute top-0 left-0 w-full h-full bg-stone-950/50 flex items-center justify-center">
					<div>
						<p>{this.props.overlayMessage}</p>
						<button
							className="bg-blue-500 text-white px-4 py-2 rounded-md"
							onClick={() => this.handleButton()}
						>
							{this.props.isWin || this.props.isDraw
								? 'play again!'
								: 'continue'}
						</button>
					</div>
				</div>
			</>
		);
	}
};

const mapStateToProps = (state) => ({
	isWin: state.isWin,
	isDraw: state.isDraw,
	overlayMessage: state.overlayMessage,
});

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch,
});

export const Overlay = connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);
