export const validate = (value, validators) => {
	const errors = validators.reduce((acc, v) => (v.test(value) ? acc : `${v.message}\n${acc}`), '');
	return errors;
};
