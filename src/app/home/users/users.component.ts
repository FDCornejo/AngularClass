import { Component, OnInit } from '@angular/core';
import {UserService } from '../../shared/users/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: Array<any> ;
  numberPage: number = 2;
  constructor(
    private _userService: UserService,
    private _snackBar: MatSnackBar
  ) { }
  getListUser(page){
    this._userService.getUsers(page).subscribe(response => {
      console.log(response);
      this.listUsers = response.data;
    });
  }
  ngOnInit() {
    this.getListUser(this.numberPage);
  }
  openSnackBar(message: string) {
    this._snackBar.open("Email: "+message, 'close', {
      duration: 2000,
    });
  }
}
