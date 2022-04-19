import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-hotel-registration-page',
  templateUrl: './hotel-registration-page.component.html',
  styleUrls: ['./hotel-registration-page.component.css']
})
export class HotelRegistrationPageComponent implements OnInit {

  url: string = ""
  images:any[] = [];

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.myForm.controls;
  }

  // onselectFile(e: any){

  //   if(e.target.files){
  //     var reader = new FileReader()
  //     reader.readAsDataURL(e.target.files[0])
  //     reader.onload = (event:any) =>{
  //       this.url = event.target.result
  //       console.log(this.url)
  //     }
  //   }

  // }

  onselectFile(event: any){

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
 
              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.images.push(event.target.result); 
 
                 this.myForm.patchValue({
                    fileSource: this.images
                 });
              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }
  }

}
