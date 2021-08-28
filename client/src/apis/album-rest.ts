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

  constructor(private http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  // Get only the albums of a specified user.
  public getUserAlbums(idUser: number): Observable<Album[]> {
    const url = `${this.domain}/albums?userId=${idUser}`;
    return this.http.get<Album[]>(url);
  }

  // Returns all the albums.
  public getAlbums(): Observable<Album[]> {
    const url = `${this.domain}/albums`;
    return this.http.get<Album[]>(url);
  }

  // Returns one album based on the ID.
  public getAlbum(idAlbum: any): Observable<Album> {
    const url = `${this.domain}/albums/${idAlbum}`;
    return this.http.get<Album>(url);
  }

}
