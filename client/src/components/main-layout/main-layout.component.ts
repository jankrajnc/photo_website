/* ===== Angular components ===== */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
/* ===== Our components ===== */
import { Album } from '../../components/models/album';
import { AlbumRest } from "../../apis/album-rest";
import { BreadcrumbUtil } from '../../utils/breadcrumb-util';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public breadcrumbData!: any;
  private albumRestApi = new AlbumRest(this.http);

  constructor(public router: Router, private http: HttpClient) {
    // Check when the route changes.
    router.events.forEach((event) => {
      // Look for only the NavigationEnd event and do all the logic there.
      if (event instanceof NavigationEnd) {
        //console.log(event);
        // One of the paths requires album data, so we do it here where it won't cause any problems.
        // Not an ideal solution, but I ran out of time to change the system to something more sustainable.
        this.albumRestApi.getAlbums().subscribe((albumData: Album[]) => {
          const breadcrumbUtil = new BreadcrumbUtil(albumData);
          this.breadcrumbData = breadcrumbUtil.generateBreadcrumb(event.url);
        });

      }
    });
  }

  ngOnInit(): void { }

}
