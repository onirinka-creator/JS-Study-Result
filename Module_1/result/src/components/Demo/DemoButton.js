import { Component } from '../../core/Component';

export class DemoButton extends Component {
  setup(props) {
    this.$rootElement = document.createElement('button');
    this.$rootElement.textContent = props.text;
    this.$rootElement.addEventListener('click', props.onClick);
  }
}
