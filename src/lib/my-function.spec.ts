import { myFunction } from './my-function';

describe('myFunction', () => {
  it('should return "Hello World!"', () => {
    expect(myFunction()).toBe('Hello World!');
  });
});
