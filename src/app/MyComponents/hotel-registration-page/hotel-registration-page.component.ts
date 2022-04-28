import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';


@Component({
  selector: 'app-hotel-registration-page',
  templateUrl: './hotel-registration-page.component.html',
  styleUrls: ['./hotel-registration-page.component.css']
})
export class HotelRegistrationPageComponent implements OnInit {

  url: string = ""
  images: any[] = [];
  formGroup!: FormGroup
  facilityList: string[] = []
  currentUser = ""

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(public hotelService: HotelServiceService,public router:Router) {
    this.currentUser = history.state.sendEmailId
  }
  

  ngOnInit(): void {

    // const jwtToken = localStorage.getItem('token')
    // this.currentUser = atob(jwtToken!.split('.')[1])
    // this.currentUser = JSON.parse(this.currentUser)
    // this.currentUser = JSON.stringify(this.currentUser)
    // this.currentUser = this.currentUser.split(',')[1].split(':')[1]
    // this.currentUser = this.currentUser.replace('"', '')
    // this.currentUser = this.currentUser.replace('"', '')
    // console.log(this.currentUser)

    this.initForm()
  }

  initForm() {
    this.formGroup = new FormGroup({
      emailId: new FormControl(this.currentUser, [Validators.required]),
      hotel_name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      facility1: new FormControl('',[Validators.required]),
      facility2: new FormControl('',[Validators.required]),
      facility3: new FormControl('',[Validators.required]),
      facility4: new FormControl('',[Validators.required]),
      facility5: new FormControl('',[Validators.required]),
      facility6: new FormControl('',[Validators.required]),
      facility7: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      hotelClass: new FormControl('',[Validators.required]),
      rooms_available: new FormControl('',[Validators.required]),
      room_rate: new FormControl('',[Validators.required])
    })
  }

  get f() {
    return this.myForm.controls;
  }

  onselectFile(event: any) {

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          var img = event.target.result
          
          this.images.push(img);

          this.myForm.patchValue({
            fileSource: this.images
          });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }


  submitHotelData() {

    console.log("1")

    if(this.formGroup.value.facility1){
      this.facilityList.push("A/C Rooms")
    }
    if(this.formGroup.value.facility2){
      this.facilityList.push("Non A/C Rooms")
    }
    if(this.formGroup.value.facility3){
      this.facilityList.push("Restaurant")
    }
    if(this.formGroup.value.facility4){
      this.facilityList.push("Free Wifi")
    }
    if(this.formGroup.value.facility5){
      this.facilityList.push("Laundry")
    }
    if(this.formGroup.value.facility6){
      this.facilityList.push("Parking")
    }
    if(this.formGroup.value.facility7){
      this.facilityList.push("Dining")
    }
    console.log("2")

    var hotelData = {
      "emailId":this.currentUser,
      "hotelName" : this.formGroup.value.hotel_name,
      "location" : this.formGroup.value.location,
      "facilities" : this.facilityList,
      "description" : this.formGroup.value.description,
      "hotelClass" : this.formGroup.value.hotelClass,
      "roomsAvailable" : this.formGroup.value.rooms_available,
      "roomRate" : this.formGroup.value.room_rate,
      "hotelPhotos" : this.images
    }
    //img  = img.substring(22,img.length)
    console.log("3")
    console.log(hotelData)

    this.hotelService.registerHotelDetails(hotelData).subscribe(result => {
      console.log(result)
      alert("Hotel Registered on Our Platform and is Now LIVE!")
      this.router.navigate(['/hotel-dashboard'])
    })


  }

}
