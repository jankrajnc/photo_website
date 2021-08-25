import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRest } from "../../apis/user-rest";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  private carRestApi = new UserRest(this.http);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.carRestApi.getUsers().subscribe((data: any) => {
      console.log(data);
    });

  }

}
