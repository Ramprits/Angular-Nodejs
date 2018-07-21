import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { ConstantPool } from "@angular/compiler/src/constant_pool";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  email: String;
  password: String;
  constructor(private _auth: AuthService, private _router: Router) {}
  token;
  ngOnInit() {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/events"]);
      },
      err => {
        console.error(err);
      }
    );
  }
}
