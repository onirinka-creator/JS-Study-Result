import { connect /*, useSelector */ } from 'react-redux';
import { selectName, selectAge } from '../../selectors';
export const UserContainer = ({ name, age }) => {
	// export only for testing purposes
	return (
		<div>
			<div> User: </div>
			<h1>Name: {name}</h1>
			<h1>Age: {age}</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		name: state.userState.name,
		age: state.userState.age,
	};
};

export const User = connect(mapStateToProps)(UserContainer);
