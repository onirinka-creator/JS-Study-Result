import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // ...
    const $donateLabel = document.createElement("label");
    $donateLabel.className = "donate-form__input-label";
    $donateLabel.textContent = "Enter the donation amount";
    const $input = document.createElement("input");
    $input.className = "donate-form__donate-input";
    $input.name = "amount";
    $input.type = "number";
    $input.max = "100";
    $input.min = "1";
    $input.required = true;
    const $button = document.createElement("button");
    $button.className = "donate-form__submit-button";
    $button.type = "submit";
    $button.disabled = true;
    $button.textContent = "Donate";
    $donateLabel.appendChild($input);

    this.$input = $input;
    this.$button = $button;

    this.$rootElement.appendChild($donateLabel);
    this.$rootElement.appendChild($button);

    $input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    const amount = Number(this.state.amount);
    return !isNaN(amount) && amount >= 1 && amount <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
