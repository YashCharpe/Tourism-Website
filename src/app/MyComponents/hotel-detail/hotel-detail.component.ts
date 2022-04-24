import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';



@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  srcData !: SafeResourceUrl;


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

  currentHotelData : any
  

  constructor( public domSanitizer: DomSanitizer,public router:Router,public userService:UserServiceService) { 

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

    var data = {
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
      userService.saveHotelDetailToken(data).subscribe(result=>{

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
  }

}
