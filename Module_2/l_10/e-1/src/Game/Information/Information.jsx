// import { useSelector } from 'react-redux';
// export const InformationLayout = () => {
// 	const currentPlayer = useSelector((state) => state.currentPlayer);
// 	return <div className="information">{currentPlayer}'S TURN!</div>;
// };

import { Component } from 'react';
import { connect } from 'react-redux';

const InformationContainer = class InformationContainer extends Component {
	render() {
		return (
			<div className="text-2xl font-bold mb-4 text-center">
				{this.props.currentPlayer}'S TURN!
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
