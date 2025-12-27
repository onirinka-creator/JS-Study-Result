import { useDispatch } from 'react-redux';
import { increaseAge, RESET_AGE } from '../../actions';
import { changeUserAsync } from '../../actions/change-user';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const onIncreaseAge = () => {
		dispatch(increaseAge(3));
	};

	const onResetAge = () => {
		dispatch(RESET_AGE);
	};

	const onChangeUser = () => {
		dispatch(changeUserAsync);
	};
	return (
		<div>
			<button onClick={onIncreaseAge}>Increase age</button>
			<button onClick={onResetAge}>Reset age</button>
			<button onClick={onChangeUser}>Change user</button>
		</div>
	);
};
