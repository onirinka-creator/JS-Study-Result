import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: String(Date.now()),
      date: this.formatDate(new Date()),
      amount: props.amount,
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${this.state.date} - ${this.state.amount}$`;
    
    const $removeBtn = document.createElement('button');
    $removeBtn.className = 'delete-button';
    $removeBtn.textContent = 'Delete'; 

    this.$rootElement.appendChild($removeBtn);

    $removeBtn.addEventListener('click', this.handleDelete.bind(this));
  }

  formatDate(date) {
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replaceAll('.', '/');
  }

  handleDelete () {
    const deleteButtons = this.createDeleteWindow();
    deleteButtons.addEventListener("click", (event) => {
      const { target } = event;
      if (target.closest(".yes-button")){
        this.props.onRemove(this.state.id);
        this.$rootElement.remove();
        this.$overlay.remove();
      }
      if (target.closest(".no-button")){
        this.$overlay.remove();
      }
    });
  }

  createDeleteWindow(){
    const $overlay = document.createElement("div");
    $overlay.className = "overlay";
    const $container = document.createElement("div");
    $container.className = "delete-window";
    const $title = document.createElement("h1");
    $title.className = "delete-window__title";
    $title.textContent = "Are you sure you want to delete this donation?";
    const $buttons = document.createElement("div");
    $buttons.className = "delete-window__buttons";
    const $yButton = document.createElement("button");
    $yButton.className = "delete-window__button yes-button";
    $yButton.textContent = "Delete";
    const $nButton = document.createElement("button");
    $nButton.className = "delete-window__button no-button";
    $nButton.textContent = "Cancel";

    $overlay.appendChild($container);
    $container.appendChild($title);
    $container.appendChild($buttons);
    $buttons.appendChild($nButton);
    $buttons.appendChild($yButton);

    this.$overlay = $overlay;

    document.body.appendChild($overlay);
    return $buttons;
  }
}
