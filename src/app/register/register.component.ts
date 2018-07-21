import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  email: String;
  password: String;
  constructor(public _auth: AuthService, private _router: Router) {}

  ngOnInit() {}
  registerUser(formData: NgForm) {
    this._auth.registerUser(formData).subscribe(
      res => {
        localStorage.setItem("token", res.token);
        this._router.navigate(["/events"]);
      },
      error => {
        console.error(error);
      }
    );
  }
}
