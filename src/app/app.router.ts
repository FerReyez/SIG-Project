import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);