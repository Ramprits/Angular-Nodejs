import { Routes, RouterModule } from "@angular/router";
import { SpecialComponent } from "./special.component";

const routes: Routes = [{ path: "", component: SpecialComponent }];

export const SpecialRoutes = RouterModule.forChild(routes);
