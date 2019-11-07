import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./user/signup/signup.component";
import { LoginComponent } from "./user/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateItemComponent } from "./dashboard/create-item/create-item.component";
import { UpdateItemComponent } from "./dashboard/update-item/update-item.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { InternalServerErrorComponent } from "./internal-server-error/internal-server-error.component";
import { AppRouteGuard } from "./services/app-route.guard";

const routes: Routes = [
  { path: "", component: SignupComponent },
  { path: "signup", redirectTo: "", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AppRouteGuard]
  },
  {
    path: "dashboard/create-item",
    component: CreateItemComponent,
    canActivate: [AppRouteGuard]
  },
  {
    path: "dashboard/update-item",
    component: UpdateItemComponent,
    canActivate: [AppRouteGuard]
  },

  { path: "error", component: InternalServerErrorComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "*", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
