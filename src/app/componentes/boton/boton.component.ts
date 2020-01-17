import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  constructor() { }

  numero = 0;

  ngOnInit() {


  }

  sumar: true;

  operarNumeros = function () {
    console.log("Hemos hecho click");
    if (this.numero >= 0 && this.sumar == true) {

      if (this.numero == 10) {

        this.sumar = false;
        this.numero--;

      } else {

        this.numero++;

      }


    } else {

      if (this.numero == 0) {

        this.sumar = true;
        this.numero++;

      } else {

        this.numero--;

      }


    }
  }

}
