import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumRest {

  constructor(public http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  public getUserAlbums(idUser: number): Observable<any[]> {
    const url = `${this.domain}/albums?userId=${idUser}`;
    return this.http.get<any[]>(url);
  }

}
