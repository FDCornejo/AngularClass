import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../shared/users/user.service";
import {User} from '../../shared/models/user'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  addForm: FormGroup;
  newUser: User;
constructor(
  private _userService: UserService,
  private _snackBar: MatSnackBar,
  private _formBuilder: FormBuilder){}
  ngOnInit() {
    this.addForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      lastname: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {

    if (this.addForm.valid) {
      this.newUser = {
        first_name: this.addForm.get("name").value,
        last_name: this.addForm.get("lastname").value};
      this._userService.postNewUser(this.newUser).subscribe(response => {
        this._snackBar.open("User Created with id: "+response.id, 'close', {
          duration: 2000,
        });

      });
    } else {
      this._snackBar.open("From Invalid", 'close', {
        duration: 2000,
      });
    }

  }



}
