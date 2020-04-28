import { Hamburger } from '../components/hamburger/hamburger.module';

export class CartItem {
  constructor(public hamburger: Hamburger) {}

  value(): number {
    return this.hamburger.price * this.hamburger.quantity;
  }
}
