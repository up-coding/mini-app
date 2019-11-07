import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";

import { HttpParams, HttpClient } from "@angular/common/http";
import { environment as env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public baseUrl = "http://localhost:3000";
  public userType: any = "";
  public passwordRegex = /^[A-Za-z0-9]\w{7,}$/;
  public userNameRegex = /^[a-zA-Z0-9\@\-\_]{8,}$/;
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private http: HttpClient) {}

  public setUserInfoInLocalStorage = data => {
    localStorage.setItem("userInfo", JSON.stringify(data));
  };

  public getUserInfoFromLocalStorage: any = () => {
    return JSON.parse(localStorage.getItem("userInfo"));
  };

  public logIn(data): Observable<any> {
    console.log(data);
    return this.http.post(
      `${this.baseUrl}/user/login`,
      new HttpParams().set("email", data.email).set("password", data.password)
    );
  }

  public signUp(data): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/user/signup`,
      new HttpParams()
        .set("firstName", data.firstName)
        .set("lastName", data.lastName)
        .set("email", data.email)
        .set("password", data.password)
    );
  }

  public logout(authToken): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/users/logout`,
      new HttpParams().set("authToken", authToken)
    );
  }

  public validateEmail(email): boolean {
    if (email.match(this.emailRegex)) return true;
    return false;
  }

  public validatePassword(password): boolean {
    if (password.match(this.passwordRegex)) return true;
    return false;
  }
}
