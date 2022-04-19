import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  hiddenStatus:boolean = false;
  formGroup!:FormGroup
  formGroupLogin!:FormGroup

  constructor(public userService: UserServiceService,public router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {

    this.formGroup = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })

    this.formGroupLogin = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

  changeHiddenStatus(){
    if(this.hiddenStatus==true){
      this.hiddenStatus = false
    }else{
      this.hiddenStatus = true
    }
  }

  submitData(){
    console.log("scmnmnm")
    //console.log(this.formGroup.value)

    if(this.formGroup.valid){
      console.log(this.formGroup.value)

      this.userService.registerUser(this.formGroup.value).subscribe(result=>{
        if(result.status =="ok"){
          alert("User Registered!")
          console.log(result)
        }else if(result.status=="error"){
          alert(result.error)
        }
      })
    }
  }

  checkuser(){
    if(this.formGroupLogin.valid){
      console.log(this.formGroupLogin.value)

      this.userService.loginUser(this.formGroupLogin.value).subscribe(result =>{
        if(result.status=="ok"){
          alert("Hey " + result.firstName + "! you logged in successfully!")
        }else if(result.status=="wrong"){
          alert("Wrong Password! Please try again")
        }else{
          alert("Invalid Username! Please try again")
        }
      })
    }
  }
}
