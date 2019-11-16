import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserModule } from "./user/user.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { InternalServerErrorComponent } from "./internal-server-error/internal-server-error.component";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,

    PageNotFoundComponent,
    InternalServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    SharedModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
