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
  tituloNuevo: string;
  modoEdicion: boolean;

  // mensajes
  mensaje: string;
  showMensaje: boolean;


  constructor( private servicioTarea: TareasService ) {
    console.trace('TareasComponent constructor');
    this.tareas = []; // incializar el array
    this.tituloNuevo = '';
    this.modoEdicion = false;

    // mensaje
    this.mensaje = '';
    this.showMensaje = false;

  }// constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    this.cargarTareas();

  }// ngOnInit


  editarEstado(tarea: Tarea) {
    console.debug('Click checkbox %o', tarea);
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() );


  }// editarEstado


  eliminar(tarea: Tarea) {
    console.debug('Click Eliminar %o', tarea);

    if ( confirm('¿Estás seguro?') ) {
      console.trace('Confirmado eliminación');
      this.servicioTarea.eliminar( tarea.id ).subscribe( () => {
        this.mensaje = `Eliminada [${tarea.id}] ${tarea.titulo}`;
        this.showMensaje = true;
        this.cargarTareas();
      });


    } else {
      console.trace('Cancelado eliminación');
    }

  }// eliminar

  nuevaTarea(): void {
    console.debug('click nueva tarea %s', this.tituloNuevo );

    // comprobar longitud > 1
    if ( this.tituloNuevo && this.tituloNuevo.trim().length < 1 ) {

        this.mensaje = 'Por favor, escribe uan tarea más larga';
        this.showMensaje = true;

    } else {

        // crear objeto Tarea
        const tNueva = new Tarea();
        tNueva.titulo = this.tituloNuevo;
        console.debug(tNueva);

        this.servicioTarea.crear(tNueva).subscribe( data => {
          console.debug('Nueva Tarea creada en json-server %o', data);
          this.tituloNuevo = '';
          this.cargarTareas();
          this.mensaje = 'Tarea Creada con éxito';
          this.showMensaje = true;
        });

    }

  }// nuevaTarea


  /**
   * Llama al Serviucio para cargar todas las tareas
   * Nos va  aserivr para refrescar la lista
   */
  private cargarTareas(): void {
    console.trace('cargarTareas');

    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(
      datos => {
        console.debug('Se ejecuta de forma asíncrona');
        this.tareas = datos;
      },
      error => {
        console.warn('El servicio Rest no está en funcionamiento %o', error);
        this.mensaje = 'El servicio Rest no funciona, posiblemente no se haya arrancado';
        this.showMensaje = true;
      });

  }// cargarTareas


  cambiarTitulo(tarea: Tarea): void {
    console.debug('loose focus para cambiar titulo %o', tarea);
    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() );

  }// cambiarTitulo


}// TareasComponent
