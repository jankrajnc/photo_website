/* ===== Angular components ===== */
import { HttpClient } from '@angular/common/http';
/* ===== REST APIs ===== */
import { UserRest } from "../apis/user-rest";
import { AlbumRest } from "../apis/album-rest";
import { PhotoRest } from "../apis/photo-rest";
/* ===== Models ===== */
import { User } from '../components/models/user';
import { Album } from 'src/components/models/album';
import { Photo } from 'src/components/models/photo';

// NOTE: Ideally this class would not be required and all the data connections would be done in the database via SQL.
export class DataExtensionUtil {

    private userRestApi = new UserRest(this.http);
    private albumRestApi = new AlbumRest(this.http);
    private photoRestApi = new PhotoRest(this.http);

    constructor(private http: HttpClient) { }

    /*========================================================================================*/
    /* ===== General functions ===== */
    /*========================================================================================*/

    // Extends the existing user data with a photo.
    public generateExtendedUserData(userArray: User[]): User[] {
        // Get all albums and photos, so that we don't have to do multiple REST calls.
        this.albumRestApi.getAlbums().subscribe((albumData: Album[]) => {
            this.photoRestApi.getPhotos().subscribe((photoData: Photo[]) => {
                // Loop through all users.
                userArray.forEach((userElement) => {
                    // Filter albums based on the user.
                    const userAlbums = albumData.filter(albumElement => albumElement.userId === userElement.id);
                    // Filter photos based on the previously selected album
                    const albumPhotos = photoData.filter(photoElement => photoElement.albumId === userAlbums[0].id);
                    userElement.photos = [albumPhotos[0]];
                });
                return userArray;
            });
        });
        return userArray;
    }

    // Extends the existing album data with photos.
    public generateExtendedAlbumData(albumArray: Album[]): Album[] {
        //console.log(albumArray);
        // Get all photos so that we can select them for each album.
        this.photoRestApi.getPhotos().subscribe((data: Photo[]) => {
            //console.log(data);
            // Loop through all albums.
            albumArray.forEach((albumElement) => {
                // Filter the photos for each album based on IDs.
                const albumPhotos = data.filter(photoElement => photoElement.albumId === albumElement.id);
                // Deconstruct the photo array to use the first 3 photos.
                const [photo1, photo2, photo3] = albumPhotos;
                // Store the photos in the album object.
                albumElement.photos = [photo1, photo2, photo3];
            });
            //console.log(albumArray);
            return albumArray;
        });
        return albumArray;
    }

    // Extends the existing photo data with the album title and name of the user.
    public generateExtendedPhotoData(photoData: Photo): Photo {
        //console.log(photoData);
        this.albumRestApi.getAlbum(photoData.albumId).subscribe((albumData: Album) => {
            photoData.albumTitle = albumData.title;
            this.userRestApi.getUser(albumData.userId).subscribe((userData: User) => {
                photoData.userName = userData.name;
                return photoData;
            });
        });
        return photoData;
    }


}
