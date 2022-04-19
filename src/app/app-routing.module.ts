import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './MyComponents/index-page/index-page.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';




const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'index',component:IndexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
