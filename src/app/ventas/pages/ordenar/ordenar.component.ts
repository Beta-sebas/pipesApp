import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;
  ordenarPor  : string = 'sin valor';
  heroes : Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toogle() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( parametro: string ) {
    this.ordenarPor = parametro;
  }

}
