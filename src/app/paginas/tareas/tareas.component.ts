import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;

  constructor(private servicioTarea: TareasService) {
    console.trace('TareasComponent constructor');
    this.tareas = [];

  } // constructor

  ngOnInit() {
    console.trace('ngOnInit constructor');

    // Llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe( datos => {
      console.debug('Esto se ejecuta de forma asíncrona');
      this.tareas = datos;

    });

  } // ngOnInit

}
