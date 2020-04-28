import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { CartItem } from '../cart/cart.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as cep from 'cep-promise';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  show: boolean = false;
  textModal: string;

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ) {}

  drinks: any[] = [
    {
      title: 'Água',
      price: 3.0,
      quantity: 0,
    },
    {
      title: 'Refrigerante Lata',
      price: 4.0,
      quantity: 0,
    },
    {
      title: 'Refrigerante 600ml',
      price: 6.0,
      quantity: 0,
    },
    {
      title: 'Refrigerante 2L',
      price: 9.0,
      quantity: 0,
    },
  ];

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      paymentOption: this.formBuilder.control('', Validators.required),
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      phone: this.formBuilder.control('', Validators.required),
      cep: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),
      city: this.formBuilder.control('', Validators.required),
      neighborhood: this.formBuilder.control('', Validators.required),
      street: this.formBuilder.control('', Validators.required),
      n: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      complement: this.formBuilder.control(''),
      text: this.formBuilder.control(''),
    });
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  incrementHamburger(item: CartItem) {
    return this.orderService.incrementHambuger(item);
  }

  decrementHamburger(item: CartItem) {
    return this.orderService.decrementHambuger(item);
  }

  itemsValue(): number {
    let money = this.drinks
      .map((item) => item.price * item.quantity)
      .reduce((prev, value) => prev + value, 0);
    return this.orderService.itemsValue(money);
  }

  inc(drink: any) {
    this.drinks.find((item) => {
      if (item.title === drink.title) {
        item.quantity = item.quantity + 1;
      }
    });
  }

  dec(drink: any) {
    this.drinks.find((item) => {
      if (item.title === drink.title) {
        if (item.quantity !== 0) {
          item.quantity = item.quantity - 1;
        }
      }
    });
  }

  check(form: any) {
    if (form.valid) {
      console.log(form, this.drinks, this.orderService.cartItems());
    } else {
      if (form.controls.paymentOption.errors) {
        this.textModal = 'Não esqueça de informar a forma de pagamento!';
        this.show = true;
      } else {
        this.textModal = 'Informações inválidas!, verifique.';
        this.show = true;
      }
    }
  }

  toggleModal() {
    this.show = !this.show;
  }
}
