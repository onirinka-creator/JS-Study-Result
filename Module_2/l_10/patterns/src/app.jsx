import { useState } from 'react';
import styles from './app.module.css';

const withLogging = (Component) => {
	const NewComponent = (props) => {
		console.log(props.user);
		return <Component {...props} />;
	};
	return NewComponent;
};

const withLoggingAndColor = (Component, color) => {
	const NewComponent = (props) => {
		console.log(props.user);
		return (
			<span style={{ color }}>
				<Component {...props} />
			</span>
		);
	};
	return NewComponent;
};

export const HelloMessage = ({ user }) => {
	return <span>Hello {user}!</span>;
};

export const GoodbyeMessage = ({ user }) => {
	return <span>Goodbye {user}!</span>;
};

const HelloMessageWithLogging = withLogging(HelloMessage);
const HelloMessageWithLoggingAndColor = withLoggingAndColor(HelloMessage, 'red');

const MessageWithLoggingAndColor = ({ Message, color, ...props }) => {
	console.log(props.user);
	return (
		<span style={{ color }}>
			<Message {...props} />
		</span>
	);
};

const ComponentWithLoggingAndColor = ({ children, color, ...props }) => {
	console.log(props.user);
	return <span style={{ color }}>{children}</span>;
};

export const UserWidget = ({ Message, messageProps }) => {
	const user = 'John Doe';
	return (
		<div className={styles.userWidget}>
			<h1>Current User: {user}</h1>
			<div>Message:</div>
			<HelloMessageWithLogging user={user} />
			<br />
			<HelloMessageWithLoggingAndColor user={user} />
			<br />
			<MessageWithLoggingAndColor Message={HelloMessage} color="blue" user={user} />
			<br />
			<ComponentWithLoggingAndColor color="green" user={user}>
				<HelloMessage user={user} />
			</ComponentWithLoggingAndColor>
			{/* {render(user)} */}
			{/* {children(user)} */}
			{/* <HelloMessage user={user} /> */}
			{/* <GoodbyeMessage user={user} /> */}
		</div>
	);
};

export const App = () => {
	return (
		<div className={styles.app}>
			{/* <UserWidget>{(user) => <HelloMessage user={user} />}</UserWidget> */}
			{/* <UserWidget render={() => <GoodbyeMessage user="John Doe" />} /> */}
			<UserWidget />
			{/* <UserWidget Message={GoodbyeMessage} messageProps={{ prop: 'prop' }} /> */}
		</div>
	);
};
