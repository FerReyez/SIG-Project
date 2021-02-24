import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomeComponent } from './components/home/home.component';
import {APP_ROUTING} from './app.router';
import { UsuariosComponent } from './componentes/admin/usuarios/usuarios.component';
import { SesionesComponent } from './components/admin/sesiones/sesiones.component';
import { AccionesComponent } from './components/admin/acciones/acciones.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { OpcionesComponent } from './components/admin/opciones/opciones.component';
import { ProductosComponent } from './components/sistema/productos/productos.component';
import { CategoriasComponent } from './components/sistema/categorias/categorias.component';
import { BancosComponent } from './components/sistema/bancos/bancos.component';
import { CombosComponent } from './components/sistema/combos/combos.component';
import { DeseosComponent } from './components/sistema/deseos/deseos.component';
import { CarritoComponent } from './components/sistema/carrito/carrito.component';
import { FacturasComponent } from './components/conta/facturas/facturas.component';
import { TransaccionesComponent } from './components/conta/transacciones/transacciones.component';
import { DescuentosComponent } from './components/conta/descuentos/descuentos.component';
import { PaisesComponent } from './components/catalogo/paises/paises.component';
import { EstadosComponent } from './components/catalogo/estados/estados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    UsuariosComponent,
    SesionesComponent,
    AccionesComponent,
    MenuComponent,
    OpcionesComponent,
    ProductosComponent,
    CategoriasComponent,
    BancosComponent,
    CombosComponent,
    DeseosComponent,
    CarritoComponent,
    FacturasComponent,
    TransaccionesComponent,
    DescuentosComponent,
    PaisesComponent,
    EstadosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
