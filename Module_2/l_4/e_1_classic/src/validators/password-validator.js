export const passwordValidator = [
	{ test: (value) => /[a-z]/.test(value), message: 'Password must contain lowercase letters' },
	{ test: (value) => /[A-Z]/.test(value), message: 'Password must contain capital letters' },
	{ test: (value) => /\d/.test(value), message: 'Password must contain numbers' },
	{ test: (value) => !/\s/.test(value), message: 'Password must not contain spaces.' },
	{ test: (value) => !/[\r\n]/.test(value), message: 'Password must not contain line breaks.' },
	{ test: (value) => value.length >= 8, message: 'Password must be at least 8 characters long.' },
];
