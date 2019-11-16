import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/services/user.service";
import { ItemService } from "src/app/services/item.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Cookie } from "ng2-cookies";

@Component({
  selector: "app-update-company",
  templateUrl: "./update-company.component.html",
  styleUrls: ["./update-company.component.css"]
})
export class UpdateCompanyComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  public title: string;
  public description: string;
  public selectedImage: any;
  public itemId: string;

  constructor(
    private toastr: ToastrService,
    public userService: UserService,
    public itemService: ItemService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.itemId = this._route.snapshot.paramMap.get("issueId");
  }

  public imagePreview(files) {
    if (files.length === 0) return;

    let mimeType = files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    this.selectedImage = files[0];
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

  public updateItem() {
    if (!this.title) {
      this.toastr.warning("TITLE REQUIRED");
    } else if (!this.description) {
      this.toastr.warning("DESCRIPTION REQUIRED");
    }
    const formData = new FormData();
    formData.append("itemId", this.itemId);
    formData.append("title", this.title);
    formData.append("description", this.description);
    formData.append("image", this.selectedImage);
    formData.append("itemCreatorId", Cookie.get("receiverId"));
    formData.append("authToken", Cookie.get("authToken"));

    this.itemService.updateItem(formData).subscribe(
      res => {
        if (res.status === 200) {
          this.toastr.success("ITEM CREATED");
          this.router.navigate(["/dashboard"]);
        } else {
          this.toastr.error(res.message.toUppercase());
        }
      },
      err => {
        this.toastr.error("Error occured.");
      }
    );
  }
}
