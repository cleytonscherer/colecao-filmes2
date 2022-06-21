import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadFilmeComponent } from './cad-filme/cad-filme.component';
import { CadGeneroComponent } from './cad-genero/cad-genero.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    CadFilmeComponent,
    CadGeneroComponent,
    ListaFilmesComponent,
    ListaGenerosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
