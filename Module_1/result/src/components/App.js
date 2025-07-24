import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $totalTitle = document.createElement("h1");
    $totalTitle.className = "total-amount";
    $totalTitle.textContent = "Total: ";
    const $total = document.createElement("span");
    $total.textContent = `${this.state.total}$`;
    $totalTitle.appendChild($total);
    this.$rootElement.appendChild($totalTitle);

    this.$total = $total;
    
    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this)
    });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({
      amount: amount,
      onRemove: (id) => this.removeDonate(id)
    });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.renderList();
  }
  
  removeDonate(id){
    const index = this.state.donates.findIndex(item => item.state.id === id);
    const deletedAmount = this.state.donates[index].state.amount;
    this.state.total -= deletedAmount;
    this.state.donates.splice(index, 1);
    this.renderList();
  }

  renderList() {
    this.$total.textContent = `${this.state.total}$`;
  }
}
