import { Component } from '../core/Component';
import { ListItem } from './ListItem';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $listTitle = document.createElement("h2");
    $listTitle.className = "donates-container__title";
    $listTitle.textContent = "Donation list";
    const $listContainer = document.createElement("div");
    $listContainer.className = "donates-container__donates";

    this.$listContainer = $listContainer;

    this.$rootElement.appendChild($listTitle);
    this.$rootElement.appendChild($listContainer);

  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}