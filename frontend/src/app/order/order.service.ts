import { CartService } from '../cart/cart.service';
import { Injectable } from '@angular/core';
import { CartItem } from '../cart/cart.model';

@Injectable()
export class OrderService {
  constructor(private cartService: CartService) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(money): number {
    return this.cartService.total(money);
  }

  incrementHambuger(item: CartItem) {
    this.cartService.incrementHamburger(item);
  }

  decrementHambuger(item: CartItem) {
    this.cartService.decrementHamburger(item);
  }
}
