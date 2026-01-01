import { connect /* useDispatch */ } from 'react-redux';
import { increaseAge, RESET_AGE } from '../../actions';
import { changeUserAsync } from '../../actions/change-user';

export const ControlPanelContainer = ({ onIncreaseAge, onResetAge, onChangeUser }) => {
	// const dispatch = useDispatch();
	return (
		<div>
			<button onClick={onIncreaseAge}>Increase age</button>
			<button onClick={onResetAge}>Reset age</button>
			<button onClick={onChangeUser}>Change user</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onIncreaseAge: () => dispatch(increaseAge(3)),
	onResetAge: () => dispatch(RESET_AGE),
	onChangeUser: () => dispatch(changeUserAsync),
});

export const ControlPanel = connect(null, mapDispatchToProps)(ControlPanelContainer);
