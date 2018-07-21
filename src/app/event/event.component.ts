import { Component, OnInit } from "@angular/core";
import { EventsService } from "./events.service";
import { EventData } from "./event.model";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  events: EventData[];
  constructor(private _eventService: EventsService) {}

  ngOnInit() {
    setTimeout(() => {
      this._eventService.getEvents().subscribe(
        res => {
          this.events = res;
        },
        eror => {
          console.error(eror);
        }
      );
    }, 1000);
  }
}
