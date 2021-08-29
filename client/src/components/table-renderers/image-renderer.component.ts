import { Component } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular';

// The HTML code is written here directly, as it's so short and simple that it does not justify a separate file.
@Component({
  selector: 'image-renderer',
  template: `
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 11rem; margin: 5px 0 5px 0;">
      <img [src]="this.params?.data?.thumbnailUrl" class="card-img-top">
      <div class="card-body">
        <p class="card-text text-wrap">{{this.params?.data?.title}}</p>
      </div>
    </div>
  </div>`
})

export class ImageRendererComponent implements ICellRendererAngularComp {

  public params: any;

  constructor() { }

  public agInit(params: any): void {
    this.params = params;
    //console.log(params.data);
  }

  public refresh(params: any): boolean {
    return true;
  }

}