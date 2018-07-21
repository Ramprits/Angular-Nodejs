import { Component, OnInit } from "@angular/core";
import { EventData } from "../event/event.model";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { SpecialService } from "./special.service";

@Component({
  selector: "app-special",
  templateUrl: "./special.component.html",
  styleUrls: ["./special.component.css"]
})
export class SpecialComponent implements OnInit {
  specials: EventData[];
  constructor(
    private _specialService: SpecialService,
    private _router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this._specialService.getEvents().subscribe(
        res => {
          this.specials = res;
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this._router.navigate(["/login"]);
            }
          }
        }
      );
    }, 1000);
  }
}
