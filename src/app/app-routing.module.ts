import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresComponent } from './paginas/autores/autores.component';
import { LibrosComponent } from './paginas/libros/libros.component';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { MenusComponent } from './paginas/menus/menus.component';
import { AutorComponent } from './paginas/autor/autor.component';

const routes: Routes = [{
  path: 'app',
  component: MenusComponent,
  children: [{
    path: 'autores',
    component: AutoresComponent,
    children: [{
    	path: ':id',
    	component: AutorComponent
    }]
  }, {
    path: 'libros',
    component: LibrosComponent
  }, {
    path: 'categorias',
    component: CategoriasComponent
  }]
}, {
  path: '',
  redirectTo: '/app/autores',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
