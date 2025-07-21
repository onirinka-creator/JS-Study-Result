import { Component } from '../../core/Component';
import { DemoButton } from './DemoButton';

export class DemoCounter extends Component {
  setup(props) {
    this.state = { 
      counter: 0 
    };

    this.$rootElement = document.createElement('div');
    
    const heading = document.createElement('h1');
    heading.textContent = `${props.title}: ${this.state.counter}`;
    this.$heading = heading;

    const incrementButton = new DemoButton({ text: 'Increment', onClick: this.handleIncrement.bind(this) });
    const decrementButton = new DemoButton({ text: 'Decrement', onClick: this.handleDecrement.bind(this) });

    this.$rootElement.append(heading, incrementButton.$rootElement, decrementButton.$rootElement);
  }

  handleIncrement() {
    this.$heading.textContent = `${this.props.title}: ${++this.state.counter}`;
  }

  handleDecrement() {
    this.$heading.textContent = `${this.props.title}: ${--this.state.counter}`;
  }
}
