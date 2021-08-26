/* ===== Angular components ===== */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* ===== Our components ===== */
import { User } from '../components/models/user';

@Injectable({
  providedIn: 'root'
})

export class UserRest {

  constructor(public http: HttpClient) { }

  private domain = 'https://jsonplaceholder.typicode.com';

  public getUsers(): Observable<User[]> {
    const url = `${this.domain}/users`;
    return this.http.get<User[]>(url);
  }

}
