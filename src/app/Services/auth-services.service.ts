import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor( private http:HttpClient,private router:Router ) {}


  loginUser(data:any) :Observable<any> {
    return this.http.post('http://localhost:9000/login',data)
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }


}
