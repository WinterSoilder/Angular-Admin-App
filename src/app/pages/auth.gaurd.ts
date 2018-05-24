import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router:Router,
    ){}

    canActivate(): Observable<boolean>{
        if(localStorage.getItem('uid') == null){
            this.router.navigate(['/login']);
            return Observable.of(false);
        }else{
            return Observable.of(true);
        }
    }
}