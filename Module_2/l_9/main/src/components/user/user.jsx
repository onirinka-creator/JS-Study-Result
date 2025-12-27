import { useSelector } from 'react-redux';
import { selectName, selectAge } from '../../selectors';
export const User = () => {
	const name = useSelector(selectName);
	const age = useSelector(selectAge);
	return (
		<div>
			<div> User: </div>
			<h1>Name: {name}</h1>
			<h1>Age: {age}</h1>
		</div>
	);
};
