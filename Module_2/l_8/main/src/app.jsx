import { UserBlock, Header } from './components';
import styles from './app.module.css';
import { useEffect } from 'react';
import { appUserDataStore } from './store';

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

const App = () => {
	useEffect(() => {
		const userDataFromServer = getUsersFromServer();

		appUserDataStore.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onCUserChange = () => {
		if (appUserDataStore.getState().id === 'asd223344') {
			const anotherUserDataFromServer = getAnotherUserFromServer();
			appUserDataStore.dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
		} else {
			const userDataFromServer = getUsersFromServer();
			appUserDataStore.dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
		}
	};

	return (
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
	);
};

export default App;
