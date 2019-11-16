import { Component, OnInit, Input } from "@angular/core";
import { Cookie } from "ng2-cookies";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../services/user.service";
import { ItemService } from "../services/item.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private authToken: string;
  public items: [] = [];

  constructor(
    private toastr: ToastrService,
    public userService: UserService,
    public itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authToken = Cookie.get("authToken");
    this.getAllItems();
  }

  public getAllItems() {
    this.itemService.getAllItem(this.authToken).subscribe(
      res => {
        if (res.status === 200) {
          this.items = res.data;
          console.log(this.items);
        } else {
          //this.toastr.error(res.message.toUpperCase());
        }
      },
      err => {
        // this.toastr.error("ERROR OCCURED.");
      }
    );
  }

  public gotoCreateItem() {
    this.router.navigate(["/dashboard/create-item"]);
  }
  public gotoUpdateItem(itemId) {
    this.router.navigate(["/dashboard/update-item", itemId]);
  }

  public deleteItem(itemId) {
    this.itemService.deleteItem(itemId, Cookie.get("authToken")).subscribe(
      res => {
        if (res.status === 200) {
          this.toastr.success("ITEM DELETED");
        } else {
          //this.toastr.error(res.message.toUppercase());
        }
      },
      err => {
        this.toastr.error("ERROR OCCURED.");
      }
    );
  }
}
