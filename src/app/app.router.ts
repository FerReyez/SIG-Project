import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SesionesComponent } from './components/admin/sesiones/sesiones.component';
import { AccionesComponent } from './components/admin/acciones/acciones.component';
import { MenuComponent } from './components/admin/menu/menu.component';
import { OpcionesComponent } from './components/admin/opciones/opciones.component';
import { ProductosComponent } from './components/sistema/productos/productos.component';
import { CategoriasComponent } from './components/sistema/categorias/categorias.component';
import { CombosComponent } from './components/sistema/combos/combos.component';
import { DeseosComponent } from './components/sistema/deseos/deseos.component';
import { CarritoComponent } from './components/sistema/carrito/carrito.component';
import { FacturasComponent } from './components/conta/facturas/facturas.component';
import { TransaccionesComponent } from './components/conta/transacciones/transacciones.component';
import { DescuentosComponent } from './components/conta/descuentos/descuentos.component';
import { PaisesComponent } from './components/catalogo/paises/paises.component';
import { EstadosComponent } from './components/catalogo/estados/estados.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { BancosComponent } from "./components/conta/bancos/bancos.component";
import { VentasComponent } from './components/reportes/ventas/ventas.component';
import { MasVendidosComponent } from './components/reportes/mas-vendidos/mas-vendidos.component';
import { MenosVendidosComponent } from './components/reportes/menos-vendidos/menos-vendidos.component';
import { ProveedoreVentasComponent } from './components/reportes/proveedore-ventas/proveedore-ventas.component';
import { CategoriasMasComponent } from './components/reportes/categorias-mas/categorias-mas.component';
import { DevolucionesProdComponent } from './components/reportes/devoluciones-prod/devoluciones-prod.component';

const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'sesion', component: SesionesComponent },
    { path: 'accion', component: AccionesComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'opcion', component: OpcionesComponent },
    { path: 'producto', component: ProductosComponent },
    { path: 'categoria', component: CategoriasComponent },
    { path: 'combo', component: CombosComponent },
    { path: 'deseo', component: DeseosComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'factura', component: FacturasComponent },
    { path: 'transaccion', component: TransaccionesComponent },
    { path: 'descuento', component: DescuentosComponent },
    { path: 'pais', component: PaisesComponent },
    { path: 'estado', component: EstadosComponent },
    { path: 'usuario', component: UsuariosComponent },
    { path: 'rol', component: RolesComponent },
    { path: 'banco', component: BancosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'mas_vendidos', component: MasVendidosComponent },
    { path: 'menos_vendidos', component: MenosVendidosComponent },
    { path: 'provedor_mas', component: ProveedoreVentasComponent },
    { path: 'catgeorias_mas', component: CategoriasMasComponent },
    { path: 'devoluciones_prod', component: DevolucionesProdComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);