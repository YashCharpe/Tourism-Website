import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelRegistrationPageComponent } from './MyComponents/hotel-registration-page/hotel-registration-page.component';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';




const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'index',component:IndexPageComponent},
  {path:'hotel-registration',component:HotelRegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
