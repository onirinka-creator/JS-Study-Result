export const OverlayLayout = ({ isDraw, isWin, overlayMessage, handleButton }) => {
	return (
		<>
			<div className="overlay">
				<div>
					<p>{overlayMessage}</p>
					<button className="overlayButton" onClick={handleButton}>
						{isWin || isDraw ? 'play again!' : 'continue'}
					</button>
				</div>
			</div>
		</>
	);
};
