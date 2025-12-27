import styles from './list.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/add-todo';

export const ListInput = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();
	const handleEnterKey = ({ key }) => {
		if (key !== 'Enter') return;
		dispatch(addTodo(inputValue));
		setInputValue('');
	};

	const handleAddButton = () => {
		dispatch(addTodo(inputValue));
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
