/* ===== Angular components ===== */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* ===== Our components ===== */
import { User } from '../../components/models/user';
import { UserRest } from "../../apis/user-rest";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {


  /*========================================================================================*/
  /* ===== Variables ===== */
  /*========================================================================================*/
  @ViewChild('userTable') userTable: any;
  public userData!: User[];
  public columnDefinitions: any;
  private userRestApi = new UserRest(this.http);
  private userModel = new User();

  constructor(private http: HttpClient) { }

  /*========================================================================================*/
  /* ===== Initializer functions ===== */
  /*========================================================================================*/

  ngOnInit(): void {
    this.setColumnDefinitions();
    this.setUserData();
  }

  // Gets column definitions for the table.
  private setColumnDefinitions(): void {
    this.columnDefinitions = this.userModel.getUserColumnDefinitions();
  }

  // Gets data from the API and sets it.
  public setUserData(): void {
    this.userRestApi.getUsers().subscribe((data: User[]) => {
      this.userData = data;
      this.userTable.api.sizeColumnsToFit();
    });
  }

  // If no rows are present, show the user a short message about this.
  public onModelUpdated(): void {
    if (this.userTable.api.rowModel.rowsToDisplay.length === 0) {
      this.userTable.api.showNoRowsOverlay();
    }
    if (this.userTable.api.rowModel.rowsToDisplay.length > 0) {
      this.userTable.api.hideOverlay();
    }
  }

  // If no rows are present, show the user a short message about this.
  public onRowClicked(): void {
    const selectedRow = this.userTable.gridOptions.api.getSelectedRows();
    console.log(selectedRow);
  }

}
