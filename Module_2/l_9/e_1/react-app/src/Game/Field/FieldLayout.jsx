import styles from './field.module.css';

export const FieldLayout = ({ handleCell, field }) => {
	return (
		<ul className={styles.field}>
			{field.map((cell, i) => {
				return (
					<li
						key={i}
						className={styles.fieldCell}
						onClick={() => {
							handleCell(i);
						}}
					>
						<p>{cell}</p>
					</li>
				);
			})}
		</ul>
	);
};
