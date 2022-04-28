import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre : string = 'Fernando';
  genero : string = 'masculino';
  invitarMap : any = {
    'femenino': 'invitarla',
    'masculino' : 'invitarlo'
  }

  clientes    : string[] = ['Maria', 'Juan', 'Pedro', 'Manuel', 'Daniela'];
  clientesMap = {
    '=0' : 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos 1 cliente esperando',
    'other' : 'tenemos # clientes esperando'
  };

  persona = {
    nombre: 'Juan',
    semestre: 10,
    universidad: 'UniCauca',
    direccion: 'Popayán, Cauca'
  };

  iniciar: boolean = false;
  label: string = 'Iniciar';

  miObservable = interval(3000);

  miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Se resolvió la promesa')
    }, 5000);
  });
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.iniciar);
    
  }

  pipeI18nSelect() {
    this.nombre == 'Fernando' ? this.nombre = 'Maria' : this.nombre = 'Fernando';
    this.genero == 'masculino' ? this.genero = 'femenino' : this.genero = 'masculino';
  }

  pipeI18nPlural() {
    if(this.clientes.pop() == null) {this.clientes =  ['Maria', 'Juan', 'Pedro', 'Manuel']};
  }

  iniciarAsync() {
    this.iniciar = !this.iniciar;
    this.label == 'Iniciar' ? this.label = 'Reiniciar' : this.label = 'Iniciar';
    
  }

}
