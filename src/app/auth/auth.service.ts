import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authObservable : Subject<any> = new Subject();

  constructor(private _http : HttpClient, private _router: Router, private _cookieService : CookieService) { }

  login(auth_details : any){
    this._http.post('http://localhost:3000/authentication', auth_details).subscribe((data:any)=>{
      if(data.isLoggedIn){
        this._cookieService.set('token',data.token);
        this.$authObservable.next(data.token);
        this._router.navigate(['/home']);
      } else {
        alert("Invalid Crednetials!!");
      }
    });
  }

  checkUserStatus(){
    return this._cookieService.get('token');
  }

  logout(){
    this._cookieService.delete('token');
    this.$authObservable.next(false);
    this._router.navigate(['/login']);
  }
}