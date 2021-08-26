/* ===== Angular components ===== */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/* ===== Our components ===== */
import { Photo } from '../../components/models/photo';
import { PhotoRest } from "../../apis/photo-rest";

@Component({
  selector: 'app-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.scss']
})
export class PhotoTableComponent implements OnInit {

  /*========================================================================================*/
  /* ===== Variables ===== */
  /*========================================================================================*/
  @ViewChild('photoTable') photoTable: any;
  public photoData!: Photo[];
  public columnDefinitions: any;
  private photoRestApi = new PhotoRest(this.http);
  private photoModel = new Photo();

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) { }

  /*========================================================================================*/
  /* ===== Initializer functions ===== */
  /*========================================================================================*/

  ngOnInit(): void {
    this.setColumnDefinitions();
    this.setPhotoData();
  }

  // Gets column definitions for the table.
  private setColumnDefinitions(): void {
    this.columnDefinitions = this.photoModel.getPhotoColumnDefinitions();
  }

  // Gets data from the API and sets it.
  public setPhotoData(): void {
    // Get the URL parameters.
    this.activatedRouter.params.subscribe((params: any) => {
      const id = params['idAlbum'];
      this.photoRestApi.getAlbumPhotos(id).subscribe((data: Photo[]) => {
        //console.log(data);
        this.photoTable = data;
        this.photoTable.api.sizeColumnsToFit();
      });
    });
  }

  // If no rows are present, show the user a short message about this.
  public onModelUpdated(): void {
    if (this.photoTable.api.rowModel.rowsToDisplay.length === 0) {
      this.photoTable.api.showNoRowsOverlay();
    }
    if (this.photoTable.api.rowModel.rowsToDisplay.length > 0) {
      this.photoTable.api.hideOverlay();
    }
  }

  // If no rows are present, show the user a short message about this.
  public onRowClicked(): void {
    const selectedRow: Photo[] = this.photoTable.gridOptions.api.getSelectedRows();
    console.log(selectedRow);
  }

}
