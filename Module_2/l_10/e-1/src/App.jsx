import { Component } from 'react';
import { Field } from './Game/Field/Field.jsx';
import { Information } from './Game/Information/Information.jsx';
import { Overlay } from './Game/Overlay/Overlay.jsx';
import { connect } from 'react-redux';

// const App = () => {
// 	const isWin = useSelector((state) => state.isWin);
// 	const isDraw = useSelector((state) => state.isDraw);

// 	return (
// 		<div id={styles.app}>
// 			<InformationLayout />
// 			<Field />
// 			{isWin || isDraw ? <Overlay /> : null}
// 		</div>
// 	);
// };
// export default App;

const AppContainer = class AppContainer extends Component {
	render() {
		return (
			<div className="bg-stone-950 text-white flex flex-col items-center justify-center h-screen">
				<Information />
				<Field />
				{this.props.isWin || this.props.isDraw ? <Overlay /> : null}
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	isWin: state.isWin,
	isDraw: state.isDraw,
});

export const App = connect(mapStateToProps)(AppContainer);
