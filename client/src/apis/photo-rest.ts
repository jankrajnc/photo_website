import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhotoRest {

  constructor(public http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  public getPhotos() {
    const url = `${this.domain}/photos`;
    return this.http.get<any[]>(url);
  }

}
