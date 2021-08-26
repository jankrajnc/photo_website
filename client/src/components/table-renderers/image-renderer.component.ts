import { Component } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular';

// The HTML code is written here directly, as it's so short and simple that it does not justify a separate file.
@Component({
  selector: 'image-renderer',
  template: `<img width="50" height="50" src=\"https://via.placeholder.com/150/92c952\" style="border:2px solid black" >
  <p>Test title</p>`
  //template: `<img border="0" width="50" height="50" src=\"{{ params.value }}\">`
})

export class ImageRendererComponent implements ICellRendererAngularComp {

  private params: any;

  constructor() { }

  public agInit(params: any): void {
    this.params = params;
  }

  public refresh(params: any): boolean {
    return true;
  }

}