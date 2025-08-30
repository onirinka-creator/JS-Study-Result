import styles from './overlay.module.css';

export const OverlayLayout = ({ overlayMessage, isWin, isDraw, handleButton }) => {
	return (
		<>
			<div className={styles.overlay}>
				<div>
					<p>{overlayMessage}</p>
					<button className={styles.overlayButton} onClick={handleButton}>
						{isWin || isDraw ? 'play again!' : 'continue'}
					</button>
				</div>
			</div>
		</>
	);
};
