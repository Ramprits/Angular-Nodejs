import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { FormsModule } from "@angular/forms";
import { RegisterRoutes } from "./register.routing";

@NgModule({
  imports: [CommonModule, FormsModule, RegisterRoutes],
  declarations: [RegisterComponent]
})
export class RegisterModule {}
