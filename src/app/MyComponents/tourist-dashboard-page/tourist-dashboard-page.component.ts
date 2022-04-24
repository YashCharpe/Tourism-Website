import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-tourist-dashboard-page',
  templateUrl: './tourist-dashboard-page.component.html',
  styleUrls: ['./tourist-dashboard-page.component.css']
})
export class TouristDashboardPageComponent implements OnInit {

  items: number[] = [];
  hotelData: any
  hotelTitleImage: string[] = [];
  hotelNames: string[] = [];
  hotelLocations: string[] = [];
  currentUser = ""

  constructor(public hotelService: HotelServiceService, public userService: UserServiceService, public router: Router) { }

  ngOnInit(): void {

    localStorage.removeItem('hotelDetailtoken')

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



    this.userService.validateUser(this.currentUser).subscribe(res => {

      console.log(res)

      if (res.status == "ok") {

        if (res.userType == "hotel_manager") {
          this.router.navigate(['/hotel-dashboard'])
        } else if (res.userType == "cab_owner") {
          this.router.navigate(['/'])
        }

      } else if (res.status == "error") {
        alert("Something Went wrong. Please try again!")
      }


    })


    this.hotelService.getHotelDetails().subscribe(result => {
      this.hotelData = result
      console.log(this.hotelData)

      for (var i = 0; i < this.hotelData.length; i++) {
        this.items[i] = i + 1;
        this.hotelTitleImage.push(this.hotelData[i].hotelPhotos[0])
        this.hotelNames.push(this.hotelData[i].hotelName)
        this.hotelLocations.push(this.hotelData[i].location)
      }
    })
    //this.hotelData = this.hotelService.getHotelDetails()
  }

  selectHotel(index:any){

    var hotelDetailSend = {
      "hotelName": this.hotelData[index].hotelName,
      "hotelLocation": this.hotelData[index].location,
      "hotelFacilities": this.hotelData[index].facilities,
      "hotelRoomRate": this.hotelData[index].roomRate,
      "hotelRoomsAvailable": this.hotelData[index].roomsAvailable,
      "hotelClass": this.hotelData[index].hotelClass,
      "hotelDescription": this.hotelData[index].description,
      "hotelImage0": this.hotelData[index].hotelPhotos[0],
      "hotelImage1": this.hotelData[index].hotelPhotos[1],
      "hotelImage2": this.hotelData[index].hotelPhotos[2],
      "hotelImage3": this.hotelData[index].hotelPhotos[3],
    }

    this.router.navigate(['/hotel-detail'],{state:{ hotelDetailReceived : hotelDetailSend }})


  }


  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/index'])
  }

}
