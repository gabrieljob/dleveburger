import { Component, OnInit } from '@angular/core';
import { Hamburger } from '../components/hamburger/hamburger.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Hamburger[] = [
    {
      title: 'Petulante',
      price: 18.9,
      description:
        'Smash de 100g de blend da casa, uma fatia de queijo, uma fatia de bacon especial.',
      quantity: 1,
    },
    {
      title: 'Queijo Pode',
      price: 26.9,
      description:
        '120g de queijo brie empanado, geleia de pimenta, duas fatias de queijo, cebola roxa, pepino, alface, tomate e orégano.',
      quantity: 1,
    },
    {
      title: 'Modesto',
      price: 25.9,
      description:
        "Tudo em drobro! dois smash's cada um com 100g de blend da casa, duas fatias de queijo, duas fatias de bacon especial.",
      quantity: 1,
    },
    {
      title: 'De Leve',
      price: 29.9,
      description:
        '200g de blend da casa grelhado, duas fatias de queijo, duas fatias de bacon tradicional, cebola caramelizada, cebola roxa, pepino.',
      quantity: 1,
    },
    {
      title: 'Despretensioso',
      price: 34.9,
      description:
        "Multiplica por três! três smash's cada um com 100g de blend da casa, três fatias de bacon especial, três fatias de queijo.",
      quantity: 1,
    },
    {
      title: 'Bem Sereno',
      price: 29.9,
      description:
        '200g de blend da casa grelhado, duas fatias de queijo, quatro fatias de bacon especial.',
      quantity: 1,
    },
    {
      title: 'Vem Tranquilo',
      price: 39.9,
      description:
        '200g de blend da casa grelhado, smash de 100g de blend da casa, 120g de queijo brie empanado, geleia de pimenta, duas fatias de queijo, três fatias de bacon especial.',
      quantity: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
