import { Album } from './album';

describe('Album', () => {

  const album = new Album();

  it('should create an instance', () => {
    expect(album).toBeTruthy();
  });

  it('getAlbumColumnDefinitions() should return an object', () => {
    const albumDefinitions = album.getAlbumColumnDefinitions();
    expect(albumDefinitions).toBeTruthy();
    expect(albumDefinitions).toEqual(jasmine.any(Object));
  });

});
