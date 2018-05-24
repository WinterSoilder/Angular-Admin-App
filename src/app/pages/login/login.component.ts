//2.	Login page should allow the user to visit dashboard using Email and Password once account is successfully registered. -->

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;userInfo:any =  [];
  constructor(private fb: FormBuilder,public http:HttpClient,public route:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
      ]],
    })
  }

  get email() {
    return this.loginForm.get('email');
  }
  
  get password() {
    return this.loginForm.get('password');
  }


  onSubmit(){
    console.log('hello')
    const LoginData = {
      email:this.loginForm.get('email').value,
      password:this.loginForm.get('password').value,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
  
   this.http.post('http://localhost:3000/api/userLogin', LoginData, httpOptions) 
    .subscribe((res) => {
      console.log(res);
      this.userInfo = res;
      console.log(this.userInfo[0]._id)
      if(this.userInfo = undefined){
        console.log('not')
        this.route.navigate(['/login'])
        return;
      }else{
        localStorage.setItem('uid' , this.userInfo)
        this.route.navigate(['/dashboard'])
  
      }
    })
  }
}