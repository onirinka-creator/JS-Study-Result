import styles from './information.module.css';

export const InformationLayout = ({ currentPlayer }) => {
	return <div className={styles.information}>{currentPlayer}'S TURN!</div>;
};
