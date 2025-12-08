import { UserBlock, Header } from './components';
import styles from './app.module.css';
import { AppContext } from './context';
import { useEffect, useReducer } from 'react';

const getUsersFromServer = () => {
	return {
		id: 'asd223344',
		name: 'John Doe',
		age: 30,
		email: 'john.doe@example.com',
		phone: '+1 (234) 567-890',
	};
};

const getAnotherUserFromServer = () => {
	return {
		id: 'asd223345',
		name: 'Jane Doe',
		age: 25,
		email: 'jane.doe@example.com',
		phone: '+1 (234) 567-891',
	};
};

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return { ...state, age: payload };
		}
		default:
			return state;
	}
};

const App = () => {
	const [userData, dispatch] = useReducer(reducer, {});

	useEffect(() => {
		const userDataFromServer = getUsersFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onCUserChange = () => {
		if (userData.id === 'asd223344') {
			const anotherUserDataFromServer = getAnotherUserFromServer();
			dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
		} else {
			const userDataFromServer = getUsersFromServer();
			dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
		}
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<div className={styles.divider}>
					<span className={styles.dividerIcon}></span>
				</div>
				<UserBlock />
				<button className={styles.button} onClick={onCUserChange}>
					Change user
				</button>
			</div>
		</AppContext.Provider>
	);
};

export default App;
