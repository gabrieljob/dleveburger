import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Hamburger } from '../components/hamburger/hamburger.module';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  show: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.items().length !== 0) {
      this.show = true;
    }
  }

  toggle() {
    this.show = !this.show;
  }

  items(): CartItem[] {
    return this.cartService.items;
  }

  addItem(item: Hamburger) {
    this.show = true;
    this.cartService.addHamburger(item);
  }

  total(): number {
    return this.cartService.total();
  }

  removeItem(item: CartItem) {
    if (localStorage.getItem('@items')) {
      this.cartService.removeItem(item);
    } else {
      this.cartService.removeItem(item);
    }
  }

  save() {
    localStorage.setItem('@items', JSON.stringify(this.cartService.items));
  }
}
