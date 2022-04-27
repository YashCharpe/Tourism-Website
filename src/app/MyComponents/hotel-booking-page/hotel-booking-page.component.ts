import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-hotel-booking-page',
  templateUrl: './hotel-booking-page.component.html',
  styleUrls: ['./hotel-booking-page.component.css']
})
export class HotelBookingPageComponent implements OnInit {

  hotelDetailReceived:any 

  checkInTime: String = ""
  checkOutTime: String = ""
  cityName: String = ""
  emailId: String = ""
  hotelData: any = {}
  mobNo: String = ""
  noOfAdults: String = ""
  noOfChildren: String = ""
  noOfRooms: String = ""

  hotelName:String = ''
  hotelLocation:String = ''
  hotelFacilities: String[] = []
  hotelRoomRate: number
  hotelRoomsAvailable: String = ''
  hotelClass: String = ''
  hotelDescription :String = ''
  hotelImage0!: SafeResourceUrl
  hotelImage1!: SafeResourceUrl
  hotelImage2!: SafeResourceUrl
  hotelImage3!: SafeResourceUrl

  sendData:any = {}

  constructor(public router:Router) { 

    this.hotelDetailReceived = history.state.confirmReceive
    console.log(this.hotelDetailReceived)

    this.checkInTime = this.hotelDetailReceived.checkInTime
    this.checkOutTime = this.hotelDetailReceived.checkOutTime
    this.cityName = this.hotelDetailReceived.cityName
    this.emailId = this.hotelDetailReceived.emailId
    this.hotelData = this.hotelDetailReceived.hotelData
    this.mobNo = this.hotelDetailReceived.mobNo
    this.noOfAdults = this.hotelDetailReceived.noOfAdults
    this.noOfChildren = this.hotelDetailReceived.noOfChildren
    this.noOfRooms = this.hotelDetailReceived.noOfRooms

    this.hotelName = this.hotelData.hotelName
    this.hotelLocation = this.hotelData.hotelLocation 
    this.hotelFacilities = this.hotelData.hotelFacilities
    this.hotelRoomRate = parseInt(this.hotelData.hotelRoomRate)
    this.hotelRoomsAvailable = this.hotelData.hotelRoomsAvailable
    this.hotelClass = this.hotelData.hotelClass
    this.hotelDescription = this.hotelData.hotelDescription
    this.hotelImage0 = this.hotelData.hotelImage0
    this.hotelImage1 = this.hotelData.hotelImage1
    this.hotelImage2 = this.hotelData.hotelImage2
    this.hotelImage3 = this.hotelData.hotelImage3

  }

  ngOnInit(): void {
  }
  goToPayment(){

    this.router.navigate(['/payment-page'],{state:{confirmReceive:this.hotelDetailReceived}})

  }

}
