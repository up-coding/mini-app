import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(
    public router: Router,
    private toastr: ToastrService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  public onClickOnLogo(event): any {
    event.preventDefault();
  }

  public userSignup(): any {
    if (!this.firstName) {
      this.toastr.warning("PLEASE ENTER FIRST NAME");
    } else if (!this.lastName) {
      this.toastr.warning("PLEASE ENTER LAST NAME");
    } else if (!this.email) {
      this.toastr.warning("PLEASE ENTER YOUR EMAIL ");
    } else if (!this.password) {
      this.toastr.warning("PLEASE ENTER YOUR PASSWORD");
    } else if (!this.userService.validateEmail(this.email)) {
      this.toastr.warning("ENTERED EMAIL IS INVALID");
    } else if (!this.userService.validatePassword(this.password)) {
      this.toastr.warning("PASSWORD LENGTH 8 REQUIRED");
    } else if (!this.password) {
      this.toastr.warning("PLEASE ENTER YOUR PASSWORD");
    } else {
      let obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      this.userService.signUp(obj).subscribe(
        response => {
          if (response.status === 200) {
            this.toastr.success("Welcome", "SUCCESS");
            this.router.navigate(["/login"]);
          } else {
            this.toastr.warning(`${response.message}`, "ERROR");
            this.router.navigate(["/"]);
          }
        },
        err => {
          this.toastr.warning("Error occurred", "ERROR");
          this.router.navigate(["/error"]);
        }
      );
    }
  }

  public goToLogIn(): any {
    this.router.navigate(["/login"]);
  }
}
