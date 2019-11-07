import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  public baseUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  public createItem(newItem, authToken): Observable<any> {
    let options = new HttpHeaders();
    options.append("content-type", "multipart/formdata");
    return this.http.post(
      `${this.baseUrl}/item/create?authToken=${authToken}`,
      newItem
    );
  }

  public getAllItem(authToken): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/item/view/all?authToken=${authToken}`
    );
  }

  public deleteItem(itemId, authToken): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/item/delete/${itemId}`,
      new HttpParams().set("authToken", authToken)
    );
  }

  public updateItem(item): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/item/update/${item.itemId}`,
      new HttpParams()
        .set("itemId", item.itemId)
        .set("title", item.title)
        .set("description", item.description)
        .set("image", item.image)
        .set("itemCreatorId", item.itemCreatorId)
        .set("authToken", item.authToken)
    );
  }
}
