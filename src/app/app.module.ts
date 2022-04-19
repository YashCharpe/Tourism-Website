import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { CommonRegistrationPageComponent } from './MyComponents/common-registration-page/common-registration-page.component';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelRegistrationPageComponent } from './MyComponents/hotel-registration-page/hotel-registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CommonRegistrationPageComponent,
    IndexPageComponent,
    HotelRegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
