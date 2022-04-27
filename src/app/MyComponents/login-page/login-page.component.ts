import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/Services/auth-services.service';
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
  //emailId: String = ""

  constructor(public userService: UserServiceService,public authService: AuthServicesService,public router:Router) {

    localStorage.clear()
   
  }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {

    this.formGroup = new FormGroup({
      emailId: new FormControl('', [Validators.required,Validators.pattern("^[a-z][a-z0-9]{2,8}@[a-z][a-z0-9]{2,8}\.[a-z]{2,8}$")]),
      password: new FormControl('', [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]),
      userType: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })

    //this.emailId= this.formGroup.value.emailId;
    //"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    this.formGroupLogin = new FormGroup({
      emailId: new FormControl('', [Validators.required,Validators.pattern("^[a-z][a-z0-9]{2,8}@[a-z][a-z0-9]{2,8}\.[a-z]{2,8}$")]),
      password: new FormControl('', [Validators.required])
    })
  }

  changeHiddenStatus(){
    if(this.hiddenStatus==true){
      this.hiddenStatus = false
    }else{
      this.hiddenStatus = true
    }
  }

  get m(){
    return this.formGroupLogin.controls;
  }

  get mSignUp(){
    return this.formGroup.controls;
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

      this.authService.loginUser(this.formGroupLogin.value).subscribe(result =>{
        if(result.status=="ok"){
          localStorage.setItem('token', result.data)

          alert("Hey " + result.firstName + "! you logged in successfully!")

          if(result.userType=="tourist"){
            this.router.navigate(['/tourist-dashboard'])
          }else if(result.userType=="hotel_manager"){
            this.router.navigate(['/hotel-dashboard'])
          }


        }else if(result.status=="wrong"){
          alert("Wrong Password! Please try again")
        }else{
          alert("Invalid Username! Please try again")
        }
      })
    }
  }
}
