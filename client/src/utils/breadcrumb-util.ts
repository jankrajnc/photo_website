import { Album } from 'src/components/models/album';

export class BreadcrumbUtil {

    private albumData!: Album[];

    constructor(albums: Album[]) {
        this.albumData = albums;
    }

    /*========================================================================================*/
    /* ===== General functions ===== */
    /*========================================================================================*/

    // Returns the correct data based on the navigation URL it receives.
    public generateBreadcrumb(url: string): Array<object> {
        if (url.includes('/user-table')) {
            return this.generateUserTableBreadcrumb();
        } else if (url.includes('/album-table')) {
            return this.generateAlbumTableBreadcrumb(url.split('/').pop());
        } else if (url.includes('/photo-table')) {
            return this.generatePhotoTableBreadcrumb(url.split('/').pop());
        } else {
            return [{ title: "Error in the breadcrumb", url: "#" }];
        }
    }

    // Generates the breadcrumb data for the user table.
    public generateUserTableBreadcrumb(): Array<object> {
        return [{ title: "User table", url: "/user-table" }];
    }

    // Generates the breadcrumb data for the album table.
    public generateAlbumTableBreadcrumb(idUser: any): Array<object> {
        // We get the data of the previous breadcrumb to re-use code.
        const albumTableBreadcrumb = this.generateUserTableBreadcrumb();
        albumTableBreadcrumb.push({ title: "Album table", url: `/album-table/${idUser}` })
        return albumTableBreadcrumb;
    }

    // Generates the breadcrumb data for the photo table.
    public generatePhotoTableBreadcrumb(idAlbum: any): Array<object> {
        // We get the correct album, so that we can use its ID for one of the links.
        const selectedAlbum = this.albumData.filter(albumElement => albumElement.id === parseInt(idAlbum));
        // Previous breadcrumb data.
        const photoTableBreadcrumb = this.generateAlbumTableBreadcrumb(selectedAlbum[0].userId);
        photoTableBreadcrumb.push({ title: "Photo table", url: `/photo-table/${idAlbum}` })
        return photoTableBreadcrumb;
    }

}
