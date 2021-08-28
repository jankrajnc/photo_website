import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html'
})

export class ImageModalComponent {

    public photoData!: any;

    constructor(public modalRef: BsModalRef) {}

    public onConfirm() {
        this.modalRef.hide();
    }

    public showPhotoDetails() {
        this.modalRef.hide();
    }

}