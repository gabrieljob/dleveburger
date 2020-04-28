import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hamburger } from './hamburger.module';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  @Input() item: Hamburger;
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitAddEvent() {
    this.add.emit(this.item);
  }
}
