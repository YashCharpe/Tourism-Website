import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient,private router:Router ) { }


  registerUser(data:any) :Observable<any> {
    return this.http.post('http://localhost:9000/users',data)

  }

  loginUser(data:any) :Observable<any> {
    return this.http.post('http://localhost:9000/login',data)
  }

  validateUser(data:any) :Observable<any> {
    console.log("Validate: "+data)
    
    return this.http.get('http://localhost:9000/validateUsers/'+data)
  }

  saveHotelDetailToken(data: any): Observable<any> {
    return this.http.post("http://localhost:9000/saveHotelDetailToken",data)
  }

}
