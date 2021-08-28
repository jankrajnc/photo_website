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

  constructor(private http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

    // Get only the photos of a specified album.
  public getAlbumPhotos(idAlbum: number): Observable<Photo[]> {
    const url = `${this.domain}/photos?albumId=${idAlbum}`;
    return this.http.get<Photo[]>(url);
  }

  // Get all photos.
  public getPhotos(): Observable<Photo[]> {
    const url = `${this.domain}/photos`;
    return this.http.get<Photo[]>(url);
  }

}
