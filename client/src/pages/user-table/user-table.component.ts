/* ===== Angular components ===== */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
/* ===== Our components ===== */
import { User } from '../../components/models/user';
import { UserRest } from "../../apis/user-rest";
import { DataExtensionUtil } from "../../utils/data-extension-util";

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
  private dataExtensionUtil = new DataExtensionUtil(this.http);

  constructor(private http: HttpClient, private router: Router) { }

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
      this.userData = this.dataExtensionUtil.generateExtendedUserData(data);
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

  // Event when the user clicks on a row.
  public onRowClicked(): void {
    const selectedRow: User[] = this.userTable.gridOptions.api.getSelectedRows();
    //console.log(selectedRow);
    this.router.navigate(["../album-table", selectedRow[0].id]);
  }

}
