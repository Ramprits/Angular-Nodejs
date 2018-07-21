import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutes } from "./login.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, LoginRoutes, FormsModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
