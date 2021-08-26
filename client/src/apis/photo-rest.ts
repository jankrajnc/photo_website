/* ===== Angular components ===== */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* ===== Our components ===== */
import { Photo } from '../components/models/photo';

@Injectable({
  providedIn: 'root'
})

export class PhotoRest {

  constructor(public http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  public getAlbumPhotos(idAlbum: number): Observable<Photo[]> {
    // We only get the photos of a specified album.
    const url = `${this.domain}/photos?albumId=${idAlbum}`;
    return this.http.get<Photo[]>(url);
  }

}
