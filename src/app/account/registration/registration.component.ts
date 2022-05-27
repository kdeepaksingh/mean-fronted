import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Accountinfo } from '../accountinfo'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  massage: string ='';
  message:string ='';
  userList:any=[];
  userModelObj: Accountinfo = new Accountinfo();
  constructor(private fb: FormBuilder, private service: AccountserviceService,private router:Router,private toaster:ToastrService) {
    if (localStorage.getItem('Loginuser')) {
      router.navigate(['/'])
    }
   }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  postUserDetails() {
    this.userModelObj.fullName = this.regForm.value.fullName;
    this.userModelObj.email = this.regForm.value.email;
    this.userModelObj.password = this.regForm.value.password;
    this.service.postUsertDetails(this.userModelObj).subscribe(result => {
      console.log(result);
    this.userList= result;
    let resMsg = this.userList.message;
      // this.getAllUsertDetails();
      this.toaster.success("User Record Added Successfully!");
      // alert("User Record Added Successfully!");
      this.datasaved = true;
      this.massage = `${resMsg}`;
      this.regForm.reset();
      this.router.navigate(['/login']);
    }, (err) => {
      this.toaster.error("Something Wrong in Saving User Details");
      // alert("Something Wrong in Saving User Details");
    });
  }
  resetregForm(){
    this.regForm.reset();
  }
}
