import { Component } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder ,Validators} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-dashboard-reset',
  templateUrl: './reset.component.html',
})
export class ResetComponent {
  reset: FormGroup; 
token;
constructor(private fb: FormBuilder,public http:HttpClient,public route:Router,public active:ActivatedRoute) { }

ngOnInit() {
  this.token = this.active.snapshot.params['id'];
  this.reset = this.fb.group({
    password : ''
  })

}


onSubmit(){
  let email = localStorage.getItem('userEmail');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  this.http.post('http://localhost:3000/api/reset/'+this.token, {password : this.reset.get('password').value,email : email}, httpOptions) 
  .subscribe((res) => {
    console.log(res);
  })

}
}