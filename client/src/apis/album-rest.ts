import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlbumRest {

  constructor(public http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  public getAlbums() {
    const url = `${this.domain}/albums`;
    return this.http.get<any[]>(url);
  }

}
