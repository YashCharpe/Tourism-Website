import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  formGroup!: FormGroup;

  fullName: String="";
  emailId: String="";
  cardNumber: String="";
  cardcvc : String = "";

  currentUser = ""

  bookingDetailReceived:any

  constructor(public router: Router,public hotelService: HotelServiceService) { 
    this.bookingDetailReceived = history.state.confirmReceive
    console.log(this.bookingDetailReceived)
    const jwtToken = localStorage.getItem('token')

    if (jwtToken == null) {
      this.router.navigate(['/login'])
    } else {
      this.currentUser = atob(jwtToken!.split('.')[1])
      this.currentUser = JSON.parse(this.currentUser)
      this.currentUser = JSON.stringify(this.currentUser)
      this.currentUser = this.currentUser.split(',')[1].split(':')[1]
      this.currentUser = this.currentUser.replace('"', '')
      this.currentUser = this.currentUser.replace('"', '')
      console.log("Emailid: "+this.currentUser)
    }
  
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = new FormGroup({
      fullName : new FormControl('', [Validators.required]),
      emailId: new FormControl('',[Validators.required]),
      cardNumber: new FormControl('',[Validators.required]),
      cardcvc: new FormControl('',[Validators.required])
    })
  }

  payNow(){

    if(this.formGroup.valid){
      console.log(this.formGroup.value)
      //console.log(this.bookingDetailReceived)

      var data = {
        "emailId": this.currentUser,
        "bookingDetails" : [
          {
            "hotelName": this.bookingDetailReceived.hotelData.hotelName,
            "checkInTime" : this.bookingDetailReceived.checkInTime,
            "checkOutTime" : this.bookingDetailReceived.checkOutTime,
            "noofAdults" : this.bookingDetailReceived.noOfAdults,
            "noofChildren" : this.bookingDetailReceived.noOfChildren,
            "noofRooms" : this.bookingDetailReceived.noOfRooms,
            "hotelLocation": this.bookingDetailReceived.hotelData.hotelLocation,
            "paidAmount": (parseInt(this.bookingDetailReceived.hotelData.hotelRoomRate)-500)
          }
        ]
      }

      console.log(data)

      this.hotelService.bookHotel(data).subscribe(result => {
        //
        //this.router.navigate([''])

        if(result.code==11000){
          this.hotelService.bookHotelPatch(data).subscribe(res=>{
            //alert("Booked Successfully!")
          })
        }

        alert("Booked Successfully!")

      })




    }

  }

}
