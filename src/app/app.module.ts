import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { BodyComponent } from './componentes/body/body.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LibrosComponent } from './paginas/libros/libros.component';
import { CantidadLetrasPipe } from './pipes/cantidad-letras.pipe';
import { TraductorPipe } from './pipes/traductor.pipe';
import { AutoresComponent } from './paginas/autores/autores.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { MenusComponent } from './paginas/menus/menus.component';
import { AutorComponent } from './paginas/autor/autor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    LibrosComponent,
    CantidadLetrasPipe,
    TraductorPipe,
    AutoresComponent,
    CategoriasComponent,
    BotonComponent,
    MenusComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
