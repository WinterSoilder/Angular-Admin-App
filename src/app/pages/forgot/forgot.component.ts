import { Component } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard-forgot',
  templateUrl: './forgot.component.html',
})
export class ForgotComponent {
forgot:FormGroup;
constructor(private fb: FormBuilder,public http:HttpClient,public route:Router) { }

ngOnInit() {
 this.forgot = this.fb.group({
    email : ''
  })
}
 

onSubmit(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  localStorage.setItem('userEmail', this.forgot.get('email').value)

  this.http.post('http://localhost:3000/api/forgot', {email : this.forgot.get('email').value}, httpOptions) 
  .subscribe((res) => {
    console.log(res);
    localStorage.setItem('userEmail', this.forgot.get('email').value)
  })

}
}