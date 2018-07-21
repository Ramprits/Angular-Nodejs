import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventComponent } from "./event/event.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "events" },
  { path: "events", component: EventComponent },
  {
    path: "register",
    loadChildren: "../app/register/register.module#RegisterModule"
  },
  {
    path: "login",
    loadChildren: "../app/login/login.module#LoginModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
