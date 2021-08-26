import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/* ===== Our components ===== */
import { Album } from '../../components/models/album';
import { AlbumRest } from "../../apis/album-rest";

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss']
})
export class AlbumTableComponent implements OnInit {

  /*========================================================================================*/
  /* ===== Variables ===== */
  /*========================================================================================*/
  @ViewChild('albumTable') albumTable: any;
  public albumData!: Album[];
  public columnDefinitions: any;
  private albumRestApi = new AlbumRest(this.http);
  private albumModel = new Album();

  constructor(private http: HttpClient, private router: Router, private activatedRouter: ActivatedRoute) { }

  /*========================================================================================*/
  /* ===== Initializer functions ===== */
  /*========================================================================================*/

  ngOnInit(): void {
    this.setColumnDefinitions();
    this.setAlbumData();
  }

  // Gets column definitions for the table.
  private setColumnDefinitions(): void {
    this.columnDefinitions = this.albumModel.getAlbumColumnDefinitions();
  }

  // Gets data from the API and sets it.
  public setAlbumData(): void {
    // Get the URL parameters.
    this.activatedRouter.params.subscribe((params: any) => {
      const id = params['idUser'];
      this.albumRestApi.getUserAlbums(id).subscribe((data: Album[]) => {
        //console.log(data);
        this.albumData = data;
        this.albumTable.api.sizeColumnsToFit();
      });
    });

  }

  // If no rows are present, show the user a short message about this.
  public onModelUpdated(): void {
    if (this.albumTable.api.rowModel.rowsToDisplay.length === 0) {
      this.albumTable.api.showNoRowsOverlay();
    }
    if (this.albumTable.api.rowModel.rowsToDisplay.length > 0) {
      this.albumTable.api.hideOverlay();
    }
  }

  // If no rows are present, show the user a short message about this.
  public onRowClicked(): void {
    const selectedRow: Album[] = this.albumTable.gridOptions.api.getSelectedRows();
    console.log(selectedRow);
    //this.router.navigate(["../photo-table", selectedRow[0].id]);
  }


}
