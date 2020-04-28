import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  @Input() label: string;
  @Input() name: any;

  constructor() {}

  ngOnInit(): void {}
}
