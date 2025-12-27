import styles from './information.module.css';
import { useSelector } from 'react-redux';
export const InformationLayout = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	return <div className={styles.information}>{currentPlayer}'S TURN!</div>;
};
