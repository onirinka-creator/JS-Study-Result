const fetchUserDataMock = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ name: 'Vasya', age: 12 });
		}, 1500);
	});

export const changeUserAsync = (dispatch) =>
	fetchUserDataMock().then((userDataFromServer) =>
		dispatch({
			type: 'CHANGE_USER',
			payload: userDataFromServer,
		}),
	);
