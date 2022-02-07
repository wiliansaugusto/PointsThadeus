import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './config/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CreateComponent } from './usario/create/create.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//configurações pt-Br locale
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PointServiceService } from './point-service.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    CreateComponent,
    PageNotFoundComponent,
    LoginComponent,
    

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
    
    
  ],
  
  providers: [
    {provide: LOCALE_ID, useValue:'pt-BR'},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide:LoginComponent}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
