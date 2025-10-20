import { useEffect, useRef, useState } from 'react';
import styles from './app.module.css';
import { emailValidator, passwordValidator } from './validators';
import { FormField } from './components/field/form-field';

function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passCheck, setPassCheck] = useState('');

	const [isMailValid, setIsMailValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPassCheckValid, setIsPassCheckValid] = useState(false);
	const isDataValid = isMailValid && isPasswordValid && isPassCheckValid;

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (isDataValid) submitButtonRef.current.focus();
	}, [isDataValid]);

	const onSubmit = (event) => {
		event.preventDefault();
		const userData = {
			email: email,
			password: password,
		};
		console.log(userData);
	};

	return (
		<div className={styles.app}>
			<p className={styles.formTitle}>
				To continue, please <span className={styles.formTitleHighlight}>register</span>
			</p>
			<p className={styles.formInstruction}>Fill in the fields below</p>
			<form onSubmit={onSubmit}>
				<FormField
					type="email"
					name="email"
					title="Email"
					setValue={setEmail}
					value={email}
					validators={emailValidator}
					setIsValueValid={setIsMailValid}
				/>
				<FormField
					type="password"
					name="password"
					title="Password"
					setValue={setPassword}
					value={password}
					validators={passwordValidator}
					setIsValueValid={setIsPasswordValid}
				/>
				<FormField
					type="password"
					name="passcheck"
					title="Repeat Password"
					setValue={setPassCheck}
					value={passCheck}
					validators={[
						{
							test: (value) => value === password,
							message: "Passwords don't match",
						},
					]}
					setIsValueValid={setIsPassCheckValid}
				/>
				<button type="submit" className={styles.formSubmitButton} ref={submitButtonRef} disabled={!isDataValid}>
					Register
				</button>
			</form>
		</div>
	);
}

export default App;
