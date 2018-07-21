import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NavigationComponent } from "./navigation/navigation.component";
import { EventModule } from "./event/event.module";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, EventModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
