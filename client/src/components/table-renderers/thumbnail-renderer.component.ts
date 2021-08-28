import { Component } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular';

// The HTML code is written here directly, as it's so short and simple that it does not justify a separate file.
@Component({
  selector: 'thumbnail-renderer',
  template: `<img class="img-thumbnail" *ngFor="let photo of this.params?.data?.photos" width="50" height="50"
   [src]="photo['thumbnailUrl']" style="margin: 5px 20px 5px 0;" >`
})

export class ThumbnailRendererComponent implements ICellRendererAngularComp {

  public params: any;
  public usedPhotoUrl!: string;

  constructor() { }

  public agInit(params: any): void {
    this.params = params;
    //console.log(this.params.data);
  }

  public refresh(params: any): boolean {
    return true;
  }

}