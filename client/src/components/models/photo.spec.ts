import { Photo } from './photo';

describe('Photo', () => {

  const photo = new Photo();

  it('should create an instance', () => {
    expect(photo).toBeTruthy();
  });

  it('getPhotoColumnDefinitions() should return an object', () => {
    const photoDefinitions = photo.getPhotoColumnDefinitions();
    expect(photoDefinitions).toBeTruthy();
    expect(photoDefinitions).toEqual(jasmine.any(Object));
  });

});
