import styles from './sort.module.css';

export const Sort = ({ sortType, setSortType }) => {
	const handleSortChange = (newSortType) => {
		setSortType(newSortType);
	};

	return (
		<select className={styles.sortSelect} value={sortType} onChange={(e) => handleSortChange(e.target.value)}>
			<option value="newest">New</option>
			<option value="oldest">Old</option>
		</select>
	);
};
