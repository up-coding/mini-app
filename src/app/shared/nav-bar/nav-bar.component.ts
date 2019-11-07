import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Cookie } from "ng2-cookies";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  public logOut() {
    this.userService.logout(Cookie.get("receiverId")).subscribe(
      res => {
        if (res.status === 200) {
          Cookie.delete("receiverId");
          Cookie.delete("receiverName");
          Cookie.delete("authToken");
          localStorage.removeItem("authToken");
        } else {
          this.toastr.error(res.message.toUppercase());
        }
      },
      err => {
        this.toastr.error("ERROR OCCURED.");
      }
    );
  }
}
