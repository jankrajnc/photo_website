import { User } from './user';

describe('User', () => {

  const user = new User();

  it('should create an instance', () => {
    expect(user).toBeTruthy();
  });

  it('getUserColumnDefinitions() should return an object', () => {
    const userDefinitions = user.getUserColumnDefinitions();
    expect(userDefinitions).toBeTruthy();
    expect(userDefinitions).toEqual(jasmine.any(Object));
  });

});
