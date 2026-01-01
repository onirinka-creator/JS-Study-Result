import { memo, useState, useCallback, useMemo } from 'react';
import styles from './app.module.css';

export const Field = memo(({ name, label, value, onChange }) => {
	console.log(name);

	return (
		<div className={styles.field}>
			<span>{label}</span>
			<input name={name} type="number" value={value} onChange={onChange} />
		</div>
	);
});

function App() {
	console.log('App');
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);

	const onNumChange = useCallback((e) => {
		setNum(e.target.value);
	}, []);

	const onDegreeChange = useMemo(
		() => (e) => {
			setDegree(e.target.value);
		},
		[],
	);

	const result = Math.pow(num, degree);

	return (
		<div className={styles.app}>
			{num} in degree {degree} = {result}
			<Field name="num" label="number" value={num} onChange={onNumChange} />
			<Field name="degree" label="degree" value={degree} onChange={onDegreeChange} />
		</div>
	);
}

export default App;
