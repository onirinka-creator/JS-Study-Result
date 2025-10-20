import { useState } from 'react';
import styles from './form-field.module.css';
import { validate } from '../../utils/validate';

export const FormField = ({ title, value, setValue, validators, setIsValueValid, ...props }) => {
	const [errors, setErrors] = useState('');

	const onChange = ({ target }) => {
		const newValue = target.value;
		const validationErrors = validate(newValue, validators);
		setValue(newValue);
		setIsValueValid(!validationErrors);
		setErrors(validationErrors);
	};

	const onBlur = () => {
		return null;
	};

	return (
		<div className={styles.formField}>
			<p className={styles.formFieldTitle}>{title}</p>
			<input className={styles.formFieldInput} value={value} onChange={onChange} onBlur={onBlur} {...props} />
			{errors && <pre className={styles.errorMessages}>{errors}</pre>}
		</div>
	);
};
