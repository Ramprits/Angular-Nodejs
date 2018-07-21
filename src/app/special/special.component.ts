import { Component, OnInit } from "@angular/core";
import { EventsService } from "../event/events.service";
import { EventData } from "../event/event.model";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-special",
  templateUrl: "./special.component.html",
  styleUrls: ["./special.component.css"]
})
export class SpecialComponent implements OnInit {
  specials: EventData[];
  constructor(
    private _specialService: EventsService,
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
