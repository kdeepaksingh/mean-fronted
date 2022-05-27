import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountserviceService } from '../accountservice.service';
import { Userloginfo } from '../userloginfo';

@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
  templateUrl: './login-v1.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  datasaved = false;
  massage: string = '';
  message: string = '';
  status: any;
  errorMsg: any;
  errorStatus: any;
  userInfo: any;
  loginModelObj: Userloginfo = new Userloginfo();
  constructor(private fb: FormBuilder, private service: AccountserviceService,private router:Router, private toaster:ToastrService) {
    if (localStorage.getItem('Loginuser')) {
      router.navigate(['/'])
    }
   }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  postLoginDetails() {
    this.loginModelObj.email = this.loginForm.value.email;
    this.loginModelObj.password = this.loginForm.value.password;
    this.service.userLoginDetails(this.loginModelObj).subscribe(result => {
      this.userInfo = result;
      let response = JSON.stringify(this.userInfo);
      console.log(this.userInfo);
      console.log(response);
      let resMsg = this.userInfo['message'];
      this.status = this.userInfo['status'];
      console.log(this.status);
      this.massage = `${resMsg}`;
      console.log(this.massage);
      if (this.status == 'success') {
        this.toaster.success("User Login Successfully!!");
        // alert("User Login Successfully!!");
        this.datasaved = true;
        localStorage.setItem('Loginuser',response);
        window.location.reload();
        this.router.navigate(['/']);
      } else {
        this.toaster.error("Something wrong in login page");
        // this.datasaved = true;
        // this.errorMsg = this.userInfo['message'];
        localStorage.removeItem('Loginuser');
      }
      this.loginForm.reset();
    }
      , (err) => {
        // this.datasaved = true;
        // this.errorMsg = this.userInfo['message'];
        this.toaster.warning("Something Wrong in Login User");
        // alert("Something Wrong in Login User");

      });
  }
  resetLoginForm() {
    this.loginForm.reset();
  }
}
