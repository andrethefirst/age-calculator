import LifeExpectancy from '../src/lifeExpectancy'


describe('Life Expectancy', () => {

  let lifeExpectancy;

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy('male', 21, true, true);
  });

  test('should properly calculate expected life expectancy based on demographic', () => {
    expect(lifeExpectancy.avgLifeExpect).toEqual(64);
  });

  test('should propercly calculate the users remaining life', () => {
    expect(lifeExpectancy.remainingLife).toEqual(43);
  });
  test('should show years past expected life', () => {
    let lifeExpectancy = new LifeExpectancy('male', 80, false, false);
    lifeExpectancy.ifPastExpected();
    expect(lifeExpectancy.lifePast).toEqual(4);
  })
})