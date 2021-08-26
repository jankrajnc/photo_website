/* ===== Angular components ===== */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* ===== Our components ===== */
import { Album } from '../components/models/album';

@Injectable({
  providedIn: 'root'
})

export class AlbumRest {

  constructor(public http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  public getUserAlbums(idUser: number): Observable<Album[]> {
    // We get only the albums of a specified user.
    const url = `${this.domain}/albums?userId=${idUser}`;
    return this.http.get<Album[]>(url);
  }

}
