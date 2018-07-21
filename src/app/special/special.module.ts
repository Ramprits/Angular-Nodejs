import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpecialComponent } from "./special.component";
import { HttpClientModule } from "@angular/common/http";
import { SpecialRoutes } from "./special.routing";

@NgModule({
  imports: [CommonModule, HttpClientModule, SpecialRoutes],
  declarations: [SpecialComponent]
})
export class SpecialModule {}
