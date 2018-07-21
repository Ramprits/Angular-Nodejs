import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Auth } from "./auth.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  _baseUrl = "http://localhost:3000";
  constructor(private _http: HttpClient) {}

  registerUser(user: any): Observable<Auth> {
    return this._http.post<Auth>(this._baseUrl + `/api/register`, user);
  }

  loginUser(user: any): Observable<Auth> {
    return this._http.post<Auth>(this._baseUrl + `/api/login`, user);
  }
}
