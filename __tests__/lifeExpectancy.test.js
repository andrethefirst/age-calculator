import LifeExpectancy from '../src/lifeExpectancy'


describe('Life Expectancy', () => {

  let lifeExpectancy;

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy('male', true, true);
  });

  test('should properly calculate expected life expectancy based on demographic', () => {
    expect(lifeExpectancy.avgLifeExpect).toEqual(64);
  });
})