import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventComponent } from "./event.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [EventComponent]
})
export class EventModule {}
