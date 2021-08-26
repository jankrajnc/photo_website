import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/* ===== Our components ===== */
//import { User } from '../../components/models/user';
import { AlbumRest } from "../../apis/album-rest";

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss']
})
export class AlbumTableComponent implements OnInit {

  private albumRestApi = new AlbumRest(this.http);

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the URL parameters.
    this.activatedRouter.params.subscribe((params: any) => {
      const id = params['idUser'];
      this.albumRestApi.getUserAlbums(id).subscribe((data: any[]) => {
        console.log(data);
      });
    });
  }

}
