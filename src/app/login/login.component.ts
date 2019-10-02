import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Login } from "../shared/models/login"
import { TokenService } from "../shared/tokens/token.service";
import { UserService } from '../shared/users/user.service'




@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService, private _tokenService: TokenService, private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(10), Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }
  breakpoint: number;
  loginForm: FormGroup;
  color_valid: boolean = true;

  onSubmit() {
    if (this.loginForm.valid) {
      this.color_valid = true;
      const loginObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };
      this._userService.login(loginObject).subscribe(response => {
        console.log(response);
        this._tokenService.setActiveToken(response.token);
        this._router.navigateByUrl("app");
      });
    } else {
      this.color_valid = false;
    }
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
