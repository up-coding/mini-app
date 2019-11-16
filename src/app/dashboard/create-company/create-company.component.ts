import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { Cookie } from "ng2-cookies";
import { ItemService } from "src/app/services/item.service";

@Component({
  selector: "app-create-company",
  templateUrl: "./create-company.component.html",
  styleUrls: ["./create-company.component.css"]
})
export class CreateCompanyComponent implements OnInit {
  public imagePath;
  public imgURL: any;
  public message: string;
  public title: string;
  public description: string;
  public selectedImage: any;
  private userId: string;
  private authToken: string;

  constructor(
    private toastr: ToastrService,
    public userService: UserService,
    public itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = Cookie.get("receiverId");
    this.authToken = Cookie.get("authToken");
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

  public addItem() {
    if (!this.title) {
      this.toastr.warning("Title required!");
    } else if (!this.description) {
      this.toastr.warning("Description required!");
    }
    const formData = new FormData();
    formData.append("title", this.title);
    formData.append("description", this.description);
    formData.append("file", this.selectedImage);
    formData.append("itemCreatorId", this.userId);
    formData.append("authToken", this.authToken);

    this.itemService.createItem(formData, this.authToken).subscribe(
      res => {
        if (res.status === 200) {
          this.toastr.success("ITEM CREATED");
          this.router.navigate(["/dashboard"]);
        } else {
          this.toastr.error(res.message.toUpperCase());
        }
      },
      err => {
        this.toastr.error("Error occured.");
      }
    );
  }
}
