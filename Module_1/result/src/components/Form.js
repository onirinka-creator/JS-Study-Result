import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // ...
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
