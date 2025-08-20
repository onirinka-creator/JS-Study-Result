import { useState } from 'react';
import styles from './app.module.css';

const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const isValueVaild = value.length >= 3;

	function onInputButtonClick() {
		const promptValue = prompt();
		setValue(promptValue);
		setError('');
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			return null;
		}
	}

	function onAddButtonClick() {
		if (isValueVaild) {
			const updatedList = [...list, { id: Date.now(), value: value }];
			setList(updatedList);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
		setValue('');
	}

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>
			{error !== '' ? <div className={styles.error}>{error}</div> : null}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				) : null}
				<ul className={styles.list}>
					{list.map((item) => {
						return (
							<li className={styles.listItem} key={item.id}>
								{item.value}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default App;
