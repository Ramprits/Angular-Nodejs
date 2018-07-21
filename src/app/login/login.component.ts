import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  constructor(private _auth: AuthService, private _router: Router) {}
  token;
  ngOnInit() {}
  loginUser(form: NgForm) {
    this._auth.loginUser(form).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this._router.navigate(["/events"]);
      },
      err => {
        console.error(err);
      }
    );
  }
}
