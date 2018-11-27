import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { ListitemComponent } from './item/listitem/listitem.component';
import { DetailitemComponent } from "./item/detailitem/DetailitemComponent";
import { LoginComponent } from './login/login.component';
import { AutofocusDirective} from './directive/autofocus.directive';
import { AuthguardService }  from './service/authguard.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CargarexcelComponent } from './cargarexcel/cargarexcel.component';
import { AdminComponent } from './admin/admin.component';
import { AmazingTimePickerService, AmazingTimePickerModule } from 'amazing-time-picker';
import { CargarcedulasComponent } from './cargarcedulas/cargarcedulas.component';



//import { EnsureAuthenticated } from './ensure-authenticated.service';

@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    DetailitemComponent,
    LoginComponent,
    AutofocusDirective,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    CargarexcelComponent,
    AdminComponent,
    CargarcedulasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,                             
    ReactiveFormsModule ,
    routing,
    ChartsModule,
    Ng2TableModule,
    AmazingTimePickerModule
  ],
  providers: [AuthguardService, AmazingTimePickerService],//, EnsureAuthenticated],
  bootstrap: [AppComponent]
})
export class AppModule { }
