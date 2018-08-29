import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient, private _authService : AuthService) { }

  getproduct(){
    var token = this._authService.checkUserStatus();
    return this._http.get('http://localhost:3000/getproducts');
  }
}
