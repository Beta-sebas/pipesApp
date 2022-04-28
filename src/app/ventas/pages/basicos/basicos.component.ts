import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower    : string = 'sebastián';
  nombreUpper    : string = 'SEBASTIÁN';
  nombreCompleto : string = 'jUaN seBAStián';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
