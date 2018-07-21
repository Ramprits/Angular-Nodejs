import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { NavigationComponent } from "./navigation/navigation.component";
import { EventModule } from "./event/event.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./shared/token.interceptor";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, EventModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
