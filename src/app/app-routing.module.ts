import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingConfirmationPageComponent } from './MyComponents/booking-confirmation-page/booking-confirmation-page.component';
import { HotelBookingPageComponent } from './MyComponents/hotel-booking-page/hotel-booking-page.component';
import { HotelDashboardPageComponent } from './MyComponents/hotel-dashboard-page/hotel-dashboard-page.component';
import { HotelDetailComponent } from './MyComponents/hotel-detail/hotel-detail.component';
import { HotelRegistrationPageComponent } from './MyComponents/hotel-registration-page/hotel-registration-page.component';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { PaymentPageComponent } from './MyComponents/payment-page/payment-page.component';
import { TouristDashboardPageComponent } from './MyComponents/tourist-dashboard-page/tourist-dashboard-page.component';




const routes: Routes = [
  {path:'', redirectTo:'/index',pathMatch:'full'},
  {path:'login',component:LoginPageComponent},
  {path:'index',component:IndexPageComponent},
  {path:'hotel-registration',component:HotelRegistrationPageComponent},
  {path:'hotel-dashboard',component:HotelDashboardPageComponent} ,
  {path:'tourist-dashboard',component:TouristDashboardPageComponent},
  { path: 'hotel-detail',component:HotelDetailComponent},
  {path:'hotel-booking',component:HotelBookingPageComponent},
  {path:'payment-page',component:PaymentPageComponent},
  {path:'booking-confirmation',component:BookingConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
