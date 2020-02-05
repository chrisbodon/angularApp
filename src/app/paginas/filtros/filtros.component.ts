import { Component, OnInit } from '@angular/core';
import { ANIMALES } from 'src/app/animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche: any;
  animales: Array<any>;

  constructor() {
    console.trace('constructor');
    this.coche = {
      "nombre": "Audi R8",
      "color": "blanco",
      "isDiesel": false,
      "precio": 10000
    };

    this.animales = ANIMALES;

  } // constructor

  ngOnInit() {
    console.trace('ngOnInit');

  } // ngOnInit

}
