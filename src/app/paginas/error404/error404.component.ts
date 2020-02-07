import { Component, OnInit } from '@angular/core';
import { RUTAS } from 'src/app/app-routing.module';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  rutas: Array<any>;

  constructor() {
    this.rutas = RUTAS;
  }

  ngOnInit() {
  }

}
