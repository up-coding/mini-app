import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./user/signup/signup.component";
import { LoginComponent } from "./user/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UpdateCompanyComponent } from "./dashboard/update-company/update-company.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { InternalServerErrorComponent } from "./internal-server-error/internal-server-error.component";
import { AppRouteGuard } from "./services/app-route.guard";
import { CreateCompanyComponent } from "./dashboard/create-company/create-company.component";
import { CompanyDetailsComponent } from "./dashboard/company-details/company-details.component";

const routes: Routes = [
  { path: "", component: SignupComponent },
  { path: "signup", redirectTo: "", component: SignupComponent },
  { path: "login", component: LoginComponent },
  // {
  //   path: "dashboard",
  //   component: DashboardComponent,
  //   canActivate: [AppRouteGuard]
  // },
  // {
  //   path: "dashboard/create-item",
  //   component: CreateItemComponent,
  //   canActivate: [AppRouteGuard]
  // },
  // {
  //   path: "dashboard/update-item",
  //   component: UpdateItemComponent,
  //   canActivate: [AppRouteGuard]
  // },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "dashboard/create-item",
    component: CreateCompanyComponent
  },
  {
    path: "dashboard/update-item",
    component: UpdateCompanyComponent
  },
  {
    path: "dashboard/company-details",
    component: CompanyDetailsComponent
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
