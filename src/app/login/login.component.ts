import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { ConstantPool } from "@angular/compiler/src/constant_pool";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  email: String;
  password: String;
  constructor(private _auth: AuthService) {}

  ngOnInit() {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
}
