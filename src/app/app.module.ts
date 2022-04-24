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
import { HotelDashboardPageComponent } from './MyComponents/hotel-dashboard-page/hotel-dashboard-page.component';
import { TouristDashboardPageComponent } from './MyComponents/tourist-dashboard-page/tourist-dashboard-page.component';
import { HotelDetailComponent } from './MyComponents/hotel-detail/hotel-detail.component';
import { HotelBookingPageComponent } from './MyComponents/hotel-booking-page/hotel-booking-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CommonRegistrationPageComponent,
    IndexPageComponent,
    HotelRegistrationPageComponent,
    HotelDashboardPageComponent,
    TouristDashboardPageComponent,
    HotelDetailComponent,
    HotelBookingPageComponent
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
