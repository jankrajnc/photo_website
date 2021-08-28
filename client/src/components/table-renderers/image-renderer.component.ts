import { Component } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular';

// The HTML code is written here directly, as it's so short and simple that it does not justify a separate file.
@Component({
  selector: 'image-renderer',
  /*template: `<img width="50" height="50" src=\"{{this.params.data.thumbnailUrl}}\" style="margin: 5px 0 5px 0; border:2px solid black" >
  <p>{{this.params.data.title}}</p>`*/
  /*
  template: `<div class="card" style="width: 8rem; margin: 5px 0 5px 0;">
  <img src=\"{{this.params.data.thumbnailUrl}}\" class="card-img-top">
  <div class="card-img-overlay d-flex align-items-end">
    <p class="card-text" style="background: gray; color: whitesmoke;">{{this.params.data.title}}</p>
  </div>
</div>`
  */
  template: `
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 11rem; max-width: 11rem; margin: 5px 0 5px 0;overflow: hidden;">
      <img [src]="this.params?.data?.thumbnailUrl" class="card-img-top">
      <div class="card-body">
        <p class="card-text" style="word-wrap: break-word;">{{this.params?.data?.title}}</p>
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