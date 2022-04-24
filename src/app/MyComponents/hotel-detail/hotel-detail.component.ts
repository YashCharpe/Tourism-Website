import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  srcData !: SafeResourceUrl;

  formGroup!: FormGroup;


  hotelDetailReceived:any

  hotelName:String = ''
  hotelLocation:String = ''
  hotelFacilities: String[] = []
  hotelRoomRate: String = ''
  hotelRoomsAvailable: String = ''
  hotelClass: String = ''
  hotelDescription :String = ''
  hotelImage0!: SafeResourceUrl
  hotelImage1!: SafeResourceUrl
  hotelImage2!: SafeResourceUrl
  hotelImage3!: SafeResourceUrl

  myReader:any
   
  data:any
  currentHotelData : any
  

  constructor( public domSanitizer: DomSanitizer,public router:Router,public userService:UserServiceService,@Inject(DOCUMENT) private dom: Document) { 

    this.hotelDetailReceived = history.state.hotelDetailReceived

    var hotelData = localStorage.getItem("hotelDetailtoken")

    if(hotelData ==null&&this.hotelDetailReceived==null){
      console.log("1")
      router.navigate(['/tourist-dashboard'])
    }
    
    if(hotelData!=null){
      this.currentHotelData = atob(hotelData!.split('.')[1])
      this.currentHotelData = JSON.parse(this.currentHotelData)
      //this.currentHotelData = JSON.stringify(this.currentHotelData)
      this.hotelDetailReceived = this.currentHotelData
      console.log(this.currentHotelData)
    }

    console.log(this.hotelDetailReceived)

    this.hotelName = this.hotelDetailReceived.hotelName
    this.hotelLocation = this.hotelDetailReceived.hotelLocation 
    this.hotelFacilities = this.hotelDetailReceived.hotelFacilities
    this.hotelRoomRate = this.hotelDetailReceived.hotelRoomRate
    this.hotelRoomsAvailable = this.hotelDetailReceived.hotelRoomsAvailable
    this.hotelClass = this.hotelDetailReceived.hotelClass
    this.hotelDescription = this.hotelDetailReceived.hotelDescription
    this.hotelImage0 = this.hotelDetailReceived.hotelImage0
    this.hotelImage1 = this.hotelDetailReceived.hotelImage1
    this.hotelImage2 = this.hotelDetailReceived.hotelImage2
    this.hotelImage3 = this.hotelDetailReceived.hotelImage3

     this.data = {
      "hotelName": this.hotelName,
      "hotelLocation": this.hotelLocation,
      "hotelFacilities": this.hotelFacilities,
      "hotelRoomRate": this.hotelRoomRate,
      "hotelRoomsAvailable": this.hotelRoomsAvailable,
      "hotelClass": this.hotelClass,
      "hotelDescription" : this.hotelDescription,
      "hotelImage0": this.hotelImage0,
      "hotelImage1": this.hotelImage1,
      "hotelImage2": this.hotelImage2,
      "hotelImage3" : this.hotelImage3
    }

    if(hotelData == null){
      userService.saveHotelDetailToken(this.data).subscribe(result=>{

        if(result.status=="ok"){
          if(hotelData == null){
  
            localStorage.setItem('hotelDetailtoken', result.data)
          }
        }else{
          alert("Something went wrong!")
          router.navigate(['/tourist-dashboard'])
        }
  
  
      })
    }

    
    

    // this.hotelImage0 = this.sanitizer.bypassSecurityTrustResourceUrl(this.hotelDetailReceived.hotelImage0)
    // this.hotelImage1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.hotelDetailReceived.hotelImage1)
    // this.hotelImage2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.hotelDetailReceived.hotelImage2)
    // this.hotelImage3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.hotelDetailReceived.hotelImage3)
    // this.myReader.onloadend = () => {
    //   this.hotelImage0 = domSanitizer.bypassSecurityTrustUrl(this.hotelDetailReceived.hotelImage0);
    //   this.hotelImage1 = domSanitizer.bypassSecurityTrustUrl(this.hotelDetailReceived.hotelImage1)
    //   this.hotelImage2 = domSanitizer.bypassSecurityTrustUrl(this.hotelDetailReceived.hotelImage2)
    //   this.hotelImage3 = domSanitizer.bypassSecurityTrustUrl(this.hotelDetailReceived.hotelImage3)
    //   //console.log(this.hotelImage0);
    // }
  }
  

  

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formGroup = new FormGroup({
      cityName: new FormControl('', [Validators.required]),
      checkInTime : new FormControl('', [Validators.required]),
      checkOutTime: new FormControl('', [Validators.required]),
      noOfRooms: new FormControl('', [Validators.required]),
      noOfAdults: new FormControl('', [Validators.required]),
      noOfChildren: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required]),
      mobNo: new FormControl('', [Validators.required])

    })
  }

  submitData(){
    if(this.formGroup.valid){
      //console.log(this.formGroup.value)
      var confirmData = {
        "cityName" : this.formGroup.value.cityName,
        "checkInTime" : this.formGroup.value.checkInTime,
        "checkOutTime" : this.formGroup.value.checkOutTime,
        "noOfRooms": this.formGroup.value.noOfRooms,
        "noOfAdults": this.formGroup.value.noOfAdults,
        "noOfChildren": this.formGroup.value.noOfChildren,
        "emailId": this.formGroup.value.emailId,
        "mobNo": this.formGroup.value.mobNo,
        "hotelData": this.data
      }
      console.log(confirmData)
      this.router.navigate(['/hotel-booking'],{state:{confirmReceive:confirmData}})
    }else{
      alert("Something Went Wrong! Please try again")
    }
  }

  goUp(){
    this.dom.body.scrollTop =0;
    this.dom.documentElement.scrollTop=0;   
  }
}
