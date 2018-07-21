import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Auth } from "./auth.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  _baseUrl = "http://localhost:3000";
  constructor(private _http: HttpClient, private _router: Router) {}

  registerUser(user) {
    return this._http.post<Auth>(this._baseUrl + `/api/register`, user);
  }

  loginUser(user) {
    return this._http.post<Auth>(this._baseUrl + `/api/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }

  authenticated(res) {
    localStorage.setItem("token", res);
    this._router.navigate(["/events"]);
  }
}
