import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';

/**
 * Los path son las rutas de navegación.
 * Que deben ser declaradas de esta forma para que sean funcionales, y luego se especifican en el link con [routerLink].
 */
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'arrays', component: ArraysComponent }
  /* { path: 'productos', component: ProductosComponent },
  { path: 'juego', component: JuegoComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
