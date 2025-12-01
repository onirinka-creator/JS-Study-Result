import styles from './search-bar.module.css';

export const SearchBar = ({ value, onChange }) => (
	<div className={styles.searchWrapper}>
		<span className={styles.searchIcon}>🔍</span>
		<input
			className={styles.searchBar}
			placeholder="Search tasks..."
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
		{value && (
			<button className={styles.clearBtn} onClick={() => onChange('')}>
				✕
			</button>
		)}
	</div>
);
