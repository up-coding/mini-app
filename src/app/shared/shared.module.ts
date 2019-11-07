import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserNameComponent } from "./user-name/user-name.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
  declarations: [UserNameComponent, NavBarComponent],
  imports: [CommonModule],
  exports: [NavBarComponent]
})
export class SharedModule {}
