import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas : number = 2578547.4769;
  porcentaje  : number = 0.4858;

  constructor() { }

  ngOnInit(): void {
  }

}
