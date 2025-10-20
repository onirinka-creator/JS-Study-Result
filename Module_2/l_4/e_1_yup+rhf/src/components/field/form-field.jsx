import styles from './form-field.module.css';

export const FormField = ({ title, errors, ...props }) => {
	const renderErrors = () => {
		if (errors.types) return Object.values(errors.types).flat().join('\n');
		if (errors.message) return errors.message;
	};

	return (
		<div className={styles.formField}>
			<p className={styles.formFieldTitle}>{title}</p>
			<input className={styles.formFieldInput} {...props} />
			{errors && <pre className={styles.errorMessages}>{renderErrors()}</pre>}
		</div>
	);
};
