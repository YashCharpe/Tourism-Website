import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(private http:HttpClient,private router:Router) { }


  registerHotelDetails(data:any) :Observable<any> {
    return this.http.post("http://localhost:9000/hotelDetails",data)
  }

  getHotelDetails() :Observable<any> {
    return this.http.get("http://localhost:9000/hotelDetails")
  }

  bookHotel(data:any):Observable<any> {
    return this.http.post("http://localhost:9000/bookHotel",data)
  }

  bookHotelPatch(data:any):Observable<any> {
    return this.http.patch("http://localhost:9000/bookHotelPatch",data)
  }


}
