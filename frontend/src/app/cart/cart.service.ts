import { CartItem } from './cart.model';
import { Hamburger } from '../components/hamburger/hamburger.module';

export class CartService {
  items: CartItem[] = [];

  delivery: number = 8;

  constructor() {
    if (localStorage.getItem('@items')) {
      let items = JSON.parse(localStorage.getItem('@items'));
      items.map((item) => this.addHamburger(item.hamburger));
    }
  }

  addHamburger(item: Hamburger) {
    let foundItem = this.items.find(
      (menuItem) => menuItem.hamburger.title === item.title
    );
    if (foundItem) {
      this.incrementHamburger(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  incrementHamburger(item: CartItem) {
    item.hamburger.quantity = item.hamburger.quantity + 1;
  }

  decrementHamburger(item: CartItem) {
    item.hamburger.quantity = item.hamburger.quantity - 1;
    if (item.hamburger.quantity === 0) {
      this.removeItem(item);
    }
  }

  total(money: number = 0): number {
    let total = this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
    return total + money + (total === 0 ? 0 : this.delivery);
  }

  removeItem(item: CartItem) {
    if (localStorage.getItem('@items')) {
      let storage = JSON.parse(localStorage.getItem('@items'));

      storage.find((hamburger) => {
        if (hamburger) {
          if (item.hamburger.title === hamburger.hamburger.title) {
            storage.splice(storage.indexOf(hamburger), 1);
          }
        }
      });
      localStorage.setItem('@items', JSON.stringify(storage));
    }
    return this.items.splice(this.items.indexOf(item), 1);
  }
}
