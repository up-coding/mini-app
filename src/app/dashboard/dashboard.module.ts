import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateItemComponent } from "./create-item/create-item.component";
import { UpdateItemComponent } from "./update-item/update-item.component";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { SanitizeImageUrlPipe } from "../shared/pipe/sanitize-image-url.pipe";

@NgModule({
  declarations: [
    DashboardComponent,
    CreateItemComponent,
    UpdateItemComponent,
    SanitizeImageUrlPipe
  ],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class DashboardModule {}
