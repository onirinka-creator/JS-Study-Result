import styles from './information.module.css';
import { useReduxState } from '../../redux-manager.js';
export const InformationLayout = () => {
	const currentPlayer = useReduxState().currentPlayer;
	return <div className={styles.information}>{currentPlayer}'S TURN!</div>;
};
