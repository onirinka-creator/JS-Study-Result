import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRef, useEffect } from 'react';
import styles from './app.module.css';
import { FormField } from './components/field/form-field';

const validationSchema = yup.object({
	email: yup.string().email('Email is incorrect').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.matches(/[a-z]/, 'Password must contain lowercase letters')
		.matches(/[A-Z]/, 'Password must contain capital letters')
		.matches(/\d/, 'Password must contain numbers')
		.matches(/^\S*$/, 'Password must not contain spaces')
		.required('Password is required'),
	passCheck: yup
		.string()
		.oneOf([yup.ref('password')], "Passwords don't match")
		.required('Please repeat your password'),
});

const onSubmit = (data) => {
	const userData = {
		email: data.email,
		password: data.password,
	};
	console.log(userData);
};

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		criteriaMode: 'all',
		resolver: yupResolver(validationSchema),
	});

	const submitButtonRef = useRef(null);

	useEffect(() => {
		if (isValid && submitButtonRef.current) {
			submitButtonRef.current.focus();
		}
	}, [isValid]);

	return (
		<div className={styles.app}>
			<p className={styles.formTitle}>
				To continue, please <span className={styles.formTitleHighlight}>register</span>
			</p>
			<p className={styles.formInstruction}>Fill in the fields below</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormField type="email" title="Email" errors={errors.email} {...register('email')} />
				<FormField type="password" title="Password" errors={errors.password} {...register('password')} />
				<FormField
					type="password"
					title="Repeat Password"
					errors={errors.passCheck}
					{...register('passCheck')}
				/>
				<button type="submit" ref={submitButtonRef} className={styles.formSubmitButton} disabled={!isValid}>
					Register
				</button>
			</form>
		</div>
	);
}

export default App;
