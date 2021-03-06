import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html'
})

export class ImageModalComponent {

    // Data which gets loaded in HTML.
    public photoData!: any;
    // Used to toggle between showing details or not.
    public showDetails = false;

    constructor(public modalRef: BsModalRef) {}

    public onConfirm() {
        this.modalRef.hide();
    }

    public showPhotoDetails() {
        this.showDetails = !this.showDetails;
    }

}