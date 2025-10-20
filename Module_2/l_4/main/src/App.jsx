/*## REACT HOOK FORM + YUP ##*/

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './app.module.css';

const fieldScheme = yup.object().shape({
	login: yup
		.string()
		.matches(/^[\w_]*$/, 'Должны использоваться буквы, цифры и нижнее подчеркивание.')
		.max(20, 'Должно быть меньше 20 символов.')
		.min(3, 'Должно быть больше 3 символов.'),
});

const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldScheme),
	});

	const loginError = errors.login?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={styles.app}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input name="login" type="text" {...register('login')} />
				<button type="submit" disabled={!!loginError}>
					Отправить
				</button>
			</form>
		</div>
	);
};

/*## REACT HOOK FORM ##*/

// import { useForm } from 'react-hook-form';
// import styles from './app.module.css';

// const App = () => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm({
// 		defaultValues: {
// 			login: '',
// 		},
// 	});

// 	const loginError = errors.login?.message;

// 	const onSubmit = (formData) => {
// 		console.log(formData);
// 	};

// 	const loginProps = {
// 		minLength: { value: 3, message: 'Должно быть больше 3 символов.' },
// 		maxLength: { value: 20, message: 'Должно быть меньше 20 символов.' },
// 		pattern: { value: /^[\w_]*$/, message: 'Должны использоваться буквы, цифры и нижнее подчеркивание.' },
// 	};

// 	return (
// 		<div className={styles.app}>
// 			<form onSubmit={handleSubmit(onSubmit)}>
// 				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
// 				<input name="login" type="text" {...register('login', loginProps)} />
// 				<button type="submit" disabled={!!loginError}>
// 					Отправить
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

/* ## USEREF 2 ## */

// import { useState, useRef } from 'react';
// import styles from './app.module.css';

// const App = () => {
// 	const [stateCounter, setStateCounter] = useState(0);
// 	const refCounter = useRef(0);

// 	const incrementRefCounter = () => {
// 		refCounter.current = refCounter.current + 1;
// 		console.log('Ref = ', refCounter.current);
// 	};
// 	const incrementStateCounter = () => {
// 		setStateCounter(stateCounter + 1);
// 		console.log('State = ', stateCounter + 1);
// 	};

// 	return (
// 		<div className={styles.app}>
// 			<p>refCounter: {refCounter.current}</p>
// 			<button onClick={incrementRefCounter}>+ Ref</button>
// 			<p>stateCounter: {stateCounter}</p>
// 			<button onClick={incrementStateCounter}>+ Ref</button>
// 		</div>
// 	);
// };

/** USEREF */

// import * as yup from 'yup';
// import { useState, useRef } from 'react';
// import styles from './app.module.css';

// const sendFormData = (formData) => {
// 	console.log(formData);
// };

// const loginChangeSchema = yup
// 	.string()
// 	.matches(/^[\w_]*$/, 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание')
// 	.max(20, 'Неверный логин. Должно быть не больше 20 символов');

// const loginBlurSchema = yup.string().min(3, 'Неверный логин. Должно быть не меньше 3 символов');

// const validateAndGetErrorMessage = (schema, value) => {
// 	let errorMessage = null;

// 	try {
// 		schema.validateSync(value);
// 	} catch ({ errors }) {
// 		errorMessage = errors.reduce((message, error) => message + error + 'n', '').trim();
// 	}

// 	return errorMessage;
// };

// const App = () => {
// 	const [login, setLogin] = useState('');
// 	const [loginError, setLoginError] = useState(null);

// 	const submitButtonRef = useRef(null);

// 	const onLoginChange = ({ target }) => {
// 		setLogin(target.value);

// 		const newError = validateAndGetErrorMessage(loginChangeSchema, target.value);

// 		setLoginError(newError);

// 		if (target.value.length === 20) {
// 			submitButtonRef.current.focus();
// 		}
// 	};

// 	const onLoginBlur = ({ target }) => {
// 		let newError = validateAndGetErrorMessage(loginBlurSchema, target.value);
// 		if (newError === null) newError = validateAndGetErrorMessage(loginChangeSchema, target.value);
// 		setLoginError(newError);
// 	};

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		sendFormData({ login });
// 	};

// 	return (
// 		<div className={styles.app}>
// 			<form onSubmit={onSubmit}>
// 				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
// 				<input
// 					name="login"
// 					type="text"
// 					value={login}
// 					placeholder="Логин"
// 					onChange={onLoginChange}
// 					onBlur={onLoginBlur}
// 				/>
// 				<button ref={submitButtonRef} type="submit" disabled={loginError}>
// 					Отправить
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// import { useState } from 'react';
// import Select from 'react-select';
// import styles from './app.module.css';
// import * as yup from 'yup';

// const loginChangeScheme = yup
// 	.string()
// 	.matches(/^[\w_]*$/, 'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчёркивание')
// 	.max(20, 'Неверный логин. Не больше 20 символов.');

// const loginBlurScheme = yup.string().min(3, 'Не верный логин. Больше 3 символов');

// const validateAndGetErrorMessage = (scheme, value) => {
// 	let errorMessage = null;

// 	try {
// 		scheme.validateSync(value, { abortEarly: false });
// 	} catch ({ errors }) {
// 		errorMessage = errors.join('\n');
// 	}

// 	return errorMessage;
// };

// const App = () => {
// 	const [login, setLogin] = useState('');
// 	const [loginError, setLoginError] = useState('');

// 	/* YUP */

// 	const onLoginChange = ({ target }) => {
// 		setLogin(target.value);

// 		const error = validateAndGetErrorMessage(loginChangeScheme, target.value);

// 		setLoginError(error);
// 	};

// 	const onBlur = () => {
// 		const error = validateAndGetErrorMessage(loginBlurScheme, login);

// 		setLoginError(error);
// 	};

// 	/*## Классический способ ##*/

// 	// const onLoginChange = ({ target }) => {
// 	// 	setLogin(target.value);

// 	// 	let error = null;

// 	// 	if (!/^[\w_]*$/.test(target.value)) {
// 	// 		error = 'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание.';
// 	// 	} else if (target.value.length > 20) {
// 	// 		error = 'Неверный логин. Не больше 20 символов.';
// 	// 	}

// 	// 	setLoginError(error);
// 	// };

// 	// const onBlur = () => {
// 	// 	if (login.length < 3) {
// 	// 		setLoginError('Не верный логин. Больше 3 символов');
// 	// 	}
// 	// };

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(login);
// 	};

// 	return (
// 		<div className={styles.app}>
// 			<form onSubmit={onSubmit}>
// 				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
// 				<input
// 					type="text"
// 					name="login"
// 					value={login}
// 					placeholder="Логин"
// 					onChange={onLoginChange}
// 					onBlur={onBlur}
// 				/>
// 				<button type="submit" disabled={loginError !== null}>
// 					Отправить
// 				</button>
// 			</form>
// 		</div>
// 	);
// };

// /* ## ФОРМА И ЕЁ СОСТОЯНИЯ ## */

// // const initialState = {
// // 	email: '',
// // 	login: '',
// // 	password: '',
// // };

// // const useStore = () => {
// // 	const [state, setState] = useState(initialState);

// // 	return {
// // 		getState: () => state,
// // 		updateState: (fieldName, newValue) => {
// // 			setState({
// // 				...state,
// // 				[fieldName]: newValue,
// // 			});
// // 		},
// // 		resetState: () => setState(initialState),
// // 	};
// // };

// // const sendData = (formData) => {
// // 	console.log(formData);
// // };

// /* ## REACT SELET ## */

// // const productOptions = [
// // 	{ value: 'tv', label: 'Телевизор' },
// // 	{ value: 'smartphone', label: 'Смартфон' },
// // 	{ value: 'laptop', label: 'Ноутбук' },
// // ];

// // const colorOptions = [
// // 	{ value: 'black', label: 'Черный' },
// // 	{ value: 'silver', label: 'Серебристый' },
// // 	{ value: 'white', label: 'Белый' },
// // ];

// // function App() {
// // 	return (
// // 		<div className={styles.app}>
// // 			<Select options={productOptions} defaultValue={productOptions[0]} />
// // 			<Select isMulti options={colorOptions} defaultValue={[colorOptions[0], colorOptions[1]]} />
// // 		</div>
// // 	);

// /* ## ФОРМА И ЕЁ СОСТОЯНИЯ ## */

// // const { getState, updateState, resetState } = useStore();

// // const onSubmit = (event) => {
// // 	event.preventDefault();
// // 	sendData(getState());
// // };

// // const { email, login, password } = getState();

// // const onChange = ({ target }) => {
// // 	updateState(target.name, target.value);
// // };

// // return (
// // 	<>
// // 		<div className={styles.app}>
// // 			<form onSubmit={onSubmit}>
// // 				<input type="email" name="email" value={email} placeholder="Почта" onChange={onChange} />
// // 				<input type="text" name="login" value={login} placeholder="Логин" onChange={onChange} />
// // 				<input type="password" name="password" value={password} placeholder="Пароль" onChange={onChange} />
// // 				<button type="submit">Отправить</button>
// // 				<button type="button" onClick={resetState}>
// // 					Reset
// // 				</button>
// // 			</form>
// // 		</div>
// // 	</>
// // );
// // }

export default App;
