import { useState, useEffect, Component } from 'react';
import styles from './app.module.css';

export const App = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log(message);

		const updateScreenWidth = () => setScreenWidth(window.innerWidth);

		window.addEventListener('resize', updateScreenWidth);

		return () => window.removeEventListener('resize', updateScreenWidth);
	}, []);

	return (
		<>
			<h1>
				{message} : {screenWidth}
			</h1>
		</>
	);
};

export class OldApp extends Component {
	/** state = 0; as ann option, u can declare state here like this */

	constructor(props) {
		super(props);
		this.state = {
			screenWidth: window.innerWidth,
		}; // but usually u declare state here like this

		// this.updateScreenWidth = this.updateScreenWidth.bind(this); // u can do this.updateScreenWidth.bind(this) but it's not recommended
	}
	updateScreenWidth = () => {
		// and this is a better way to bind this
		this.setState({ screenWidth: window.innerWidth });
	};

	componentDidMount() {
		console.log(this.props.message);

		window.addEventListener('resize', this.updateScreenWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenWidth);
	}

	render() {
		return (
			<>
				<div className={styles.app}>
					{this.props.message} : {this.state.screenWidth}
				</div>
			</>
		);
	}
}
