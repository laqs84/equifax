import { Routes, RouterModule } from '@angular/router';
import { ListitemComponent } from './item/listitem/listitem.component';
import { DetailitemComponent } from "./item/detailitem/DetailitemComponent";
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthguardService }  from './service/authguard.service';
import { CargarexcelComponent } from './cargarexcel/cargarexcel.component';
import { CargarcedulasComponent } from './cargarcedulas/cargarcedulas.component'

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'index', component: HomeComponent,canActivate: [AuthguardService],
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'home', component: ListitemComponent,canActivate: [AuthguardService] },
        { path: 'parseo-masivo', component: DetailitemComponent,canActivate: [AuthguardService] },
        { path: 'cargar-excel', component: CargarexcelComponent,canActivate: [AuthguardService] },
        { path: 'admin', component: AdminComponent,canActivate: [AuthguardService] },
        { path: 'cargar-cedulas', component: CargarcedulasComponent,canActivate: [AuthguardService] },
      ] },

    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);