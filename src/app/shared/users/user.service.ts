import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constant } from "../Constants";
import {Login } from "../models/login"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public login(body: Login): Observable<any> {
    return this._http.post(Constant.API + "/login", body, Constant.headers);
  }

  public getUsers(page: number): Observable<any> {
    return this._http.get(Constant.API + "/users?page=" + page, Constant.headers);
  }

  public getUserById(id): Observable<any> {
    return this._http.get(Constant.API + "/users/" + id, Constant.headers);
  }

  public postNewUser(user): Observable<any> {
    return this._http.post(Constant.API + "/users/", user, Constant.headers);
  }

}
