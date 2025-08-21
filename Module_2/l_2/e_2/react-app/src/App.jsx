import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const steps = data; // не вижу смысла тут делать состояние, так как массив мы не изменяем

	const [activeIndex, setActiveIndex] = useState(0);

	const isOnFirstStep = activeIndex === 0;
	const isOnLastStep = activeIndex === steps.length - 1;

	function handleBackButton() {
		if (!isOnFirstStep) {
			setActiveIndex((prev) => prev - 1);
		}
	}

	function handleNextButton() {
		if (!isOnLastStep) {
			setActiveIndex((prev) => prev + 1);
		}
	}

	function handleStartOverButton() {
		setActiveIndex(0);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, i) => {
							return (
								<li
									className={`
										${styles['steps-item']}
										${activeIndex >= i ? styles.done : null}
										${activeIndex === i ? styles.active : null}
									`}
									key={step.id}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => {
											setActiveIndex(i);
										}}
									>
										{i + 1}
									</button>
									{step.title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handleBackButton}
							disabled={isOnFirstStep}
						>
							Назад
						</button>
						{!isOnLastStep ? (
							<button className={styles.button} onClick={handleNextButton}>
								Далее
							</button>
						) : (
							<button
								className={styles.button}
								onClick={handleStartOverButton}
							>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
