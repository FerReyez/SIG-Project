import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    NavegacionComponent,
    NoticiaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
