import Mars from '../src/mars'
import LifeExpectancy from '../src/lifeExpectancy'

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Mars(21);
  });

  test('should correctly calculate users age to their mars age', () => {
    expect(mars.marsAge).toEqual(11);
  });

  test('should correctly calculate the users life left on mars', () => {
    let lifeExpectancy = new LifeExpectancy('male', 21, true, true);
    let marstwo = new Mars(21);
    marstwo.lifeLeftonMars(lifeExpectancy.remainingLife);
    expect(marstwo.marsLifeLeft).toEqual(23);
  })
})