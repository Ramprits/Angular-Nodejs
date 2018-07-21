import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventData } from "../event/event.model";

@Injectable({
  providedIn: "root"
})
export class SpecialService {
  _baseUrl = "http://localhost:3000/api/specials";
  constructor(private _httpClient: HttpClient) {}

  getEvents(): Observable<EventData[]> {
    return this._httpClient.get<EventData[]>(this._baseUrl);
  }
}
