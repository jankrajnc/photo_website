import { ImageRendererComponent } from '../table-renderers/image-renderer.component';

export class Photo {

    id!: number | null;
    albumId!: number | null;
    title!: string | null;
    url!: string | null;
    thumbnailUrl!: string | null;

    constructor() {
        this.id = null;
        this.albumId = null;
        this.title = null;
        this.url = null;
        this.thumbnailUrl = null;
    }

    // Column definitions need to be set for the ag-grid table.
    private photoColumnDefinitions = [
        {
            headerName: "Title",
            field: "title",
            resizable: true,
            sortable: true
        },
        {
            headerName: 'Photo 1',
            autoHeight: true,
            resizable: true,
            cellRendererFramework: ImageRendererComponent
        }
    ];

    // Returns the column definitions.
    public getPhotoColumnDefinitions() {
        return this.photoColumnDefinitions;
    }

}
