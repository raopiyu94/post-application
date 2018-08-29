import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data)=> {
      console.log(data);
    });
  }

  backtolist(){
    this._router.navigate(['/products']);
  }

}
