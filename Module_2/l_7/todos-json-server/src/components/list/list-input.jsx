import styles from './list.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../../context';

export const ListInput = () => {
	const { addTodo } = useContext(TodoContext);
	const [inputValue, setInputValue] = useState('');

	const handleEnterKey = ({ key }) => {
		if (key !== 'Enter') return;
		addTodo(inputValue);
		setInputValue('');
	};

	const handleAddButton = () => {
		addTodo(inputValue);
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
