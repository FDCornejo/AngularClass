import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {TokenService} from "../shared/tokens/token.service"
@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {
  titleapp="Hi.js"

  constructor(
    private _tokenService: TokenService,
    private _router: Router
  ) { }

  ngOnInit() {
  }


  singOut(){
    this._tokenService.logOutToken();
    this._router.navigateByUrl("");
  }
}
