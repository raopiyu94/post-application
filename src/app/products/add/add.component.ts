import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _fb : FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      firstname : ['', [Validators.required, Validators.minLength(5)]],
      lastname : ['', [Validators.required, Validators.minLength(5)]],
      email : ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  createUser(){
    console.log(this.userForm.value);
  }

}
