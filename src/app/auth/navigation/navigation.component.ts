import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  toggleLinks : boolean = false;

  constructor(private _authService : AuthService) { }

  ngOnInit() {
    this._authService.$authObservable.subscribe((data)=>{
      this.toggleLinks = data;
      console.log(data);
    });
  }

  logout(){
    this._authService.logout();
  }

}
