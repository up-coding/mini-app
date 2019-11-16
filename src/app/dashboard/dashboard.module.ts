import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UpdateCompanyComponent } from "./update-company/update-company.component";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { SanitizeImageUrlPipe } from "../shared/pipe/sanitize-image-url.pipe";
import { CreateCompanyComponent } from "./create-company/create-company.component";
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    SanitizeImageUrlPipe,
    CompanyDetailsComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class DashboardModule {}
