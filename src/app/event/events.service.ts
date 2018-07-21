import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventData } from "./event.model";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  _baseUrl = "http://localhost:3000/api/events";
  constructor(private _httpClient: HttpClient) {}

  getEvents(): Observable<EventData[]> {
    return this._httpClient.get<EventData[]>(this._baseUrl);
  }
}
