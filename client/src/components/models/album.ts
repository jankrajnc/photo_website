import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThumbnailRendererComponent } from '../table-renderers/thumbnail-renderer.component';
import { Photo } from './photo';

// This has to be included to allow the usage of ngIf, ngFor, etc., in the HTML code of the renderers.
// For regular components this is automatically done.
@NgModule({
    imports: [CommonModule],
    declarations: [ThumbnailRendererComponent]
})

export class Album {

    id!: number | null;
    userId!: number | null;
    title!: string | null;
    photos?: Photo[];

    constructor() {
        this.id = null;
        this.userId = null;
        this.title = null;
    }

    // Column definitions need to be set for the ag-grid table.
    private albumColumnDefinitions = [
        {
            headerName: "Title",
            field: "title",
            resizable: true,
            sortable: true
        },
        {
            headerName: 'Photos',
            autoHeight: true,
            resizable: true,
            cellRendererFramework: ThumbnailRendererComponent,
        }
    ];

    // Returns the column definitions.
    public getAlbumColumnDefinitions() {
        return this.albumColumnDefinitions;
    }

}
