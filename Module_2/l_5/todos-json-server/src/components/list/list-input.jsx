import styles from './list.module.css';
import { useState } from 'react';

export const ListInput = ({ onAdd }) => {
	const [inputValue, setInputValue] = useState('');

	const handleEnterKey = ({ key }) => {
		if (key !== 'Enter') return;
		onAdd(inputValue);
		setInputValue('');
	};

	const handleAddButton = () => {
		onAdd(inputValue);
		setInputValue('');
	};

	return (
		<div className={styles.listInput}>
			<input
				type="text"
				value={inputValue}
				onKeyDown={handleEnterKey}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button type="button" onClick={handleAddButton}>
				+
			</button>
		</div>
	);
};
