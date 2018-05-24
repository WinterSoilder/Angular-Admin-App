import { Component } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
registerForm: FormGroup; 
confirm:boolean = false;
constructor(private fb: FormBuilder,public http:HttpClient,public route:Router) { }

ngOnInit() {
  this.registerForm = this.fb.group({
    firstName: ['',[
      Validators.required,
    ]],
    lastName:['',[
      Validators.required,
    ]],
    email: ['',[
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
    ]],
    confirmPassword:['',[
      Validators.required,
    ]],
    companyName : ['',[
      Validators.required,
    ]],
    address : '',
    phoneNumber: ''
  })
}

get firstName() {
  return this.registerForm.get('firstName');
}


get lastName() {
  return this.registerForm.get('lastName');
}

get companyName() {
  return this.registerForm.get('companyName');
}


get email() {
  return this.registerForm.get('email');
}

get password() {
  return this.registerForm.get('password');
}

confirmPassword(){
 if( this.registerForm.get('confirmPassword').value != this.registerForm.get('password').value){
  this.confirm = true;
 }
}

onSubmit(){
  const RegisterData = {
    firstName:this.registerForm.get('firstName').value,
    lastName:this.registerForm.get('lastName').value,
    email:this.registerForm.get('email').value,
    password:this.registerForm.get('password').value,
    company:this.registerForm.get('companyName').value,
    confirmPassword:this.registerForm.get('confirmPassword').value,
    address:this.registerForm.get('address').value,
    phoneNumber:this.registerForm.get('phoneNumber').value,
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

 this.http.post('http://localhost:3000/api/user', RegisterData, httpOptions) 
  .subscribe((res) => {
    console.log(res);

    this.route.navigate(['/login'])
  })
}
}