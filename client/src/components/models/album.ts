import { ThumbnailRendererComponent } from '../table-renderers/thumbnail-renderer.component';

export class Album {

    id!: number | null;
    userId!: number | null;
    title!: string | null;

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
            headerName: 'Photo 1',
            autoHeight: true,
            resizable: true,
            cellRendererFramework: ThumbnailRendererComponent
        }
    ];

    // Returns the column definitions.
    public getAlbumColumnDefinitions() {
        return this.albumColumnDefinitions;
    }

}
