import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(public _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        this.authenticated(res);
      },
      error => {
        console.error(error);
      }
    );
  }

  authenticated(res) {
    localStorage.setItem("token", res);
    this._router.navigate(["/events"]);
  }
}
