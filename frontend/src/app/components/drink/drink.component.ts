import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css'],
})
export class DrinkComponent implements OnInit {
  @Input() drink: any;
  @Output() inc = new EventEmitter();
  @Output() dec = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  incEvent() {
    this.inc.emit(this.drink);
  }

  decEvent() {
    this.dec.emit(this.drink);
  }
}
