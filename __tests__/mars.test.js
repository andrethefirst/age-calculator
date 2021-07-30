import Mars from '../src/mars'

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Mars(21);
  });

  test('should correctly calculate users age to their mars age', () => {
    expect(mars.marsAge).toEqual(39);
  });

  test('should correctly calculate the users life left on mars', () => {
    
  })
})