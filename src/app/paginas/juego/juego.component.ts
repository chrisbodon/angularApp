import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  jugadores = new Map();
  visible: any;
  jugador: string;
  count: number;

  constructor() {
    this.jugador = '';
    this.visible = false;
    this.count = 0;

  } // constructor

  ngOnInit() {
  } // ngOnInit

  clickCount() {
    console.trace('clickCount');
    this.count++;

  } // clickCount

  jugar() {
    this.count = 0;
    console.log("Comienza el tiempo");

    this.visible = true;
    console.log("1"  + " button: " +  this.visible);

    setTimeout(() => {

      this.visible = false;
      console.log("2"  + " button: " +  this.visible);

      this.jugadores.set(this.jugador, this.count);
      console.log("3 " + this.jugador + " " + this.count);

      console.log("Acaba el tiempo");

    }, 1000);

  }

}
