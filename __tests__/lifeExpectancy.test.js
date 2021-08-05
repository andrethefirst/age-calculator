import LifeExpectancy from '../src/lifeExpectancy'


describe('Life Expectancy', () => {

  let lifeExpectancy;

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy('male', 21, true, true);
  });

  test('should properly calculate expected life expectancy based on demographic', () => {
    expect(lifeExpectancy.avgLifeExpect).toEqual(64);
  });

  test('should properly test female on expectation', () => {
    let lifeExpectancy = new LifeExpectancy('female', 21, true, true);
    expect(lifeExpectancy.avgLifeExpect).toEqual(69);
  });

  test('should propercly calculate the users remaining life', () => {
    expect(lifeExpectancy.remainingLife).toEqual(43);
  });
  test('should show years past expected life', () => {
    let lifeExpectancy = new LifeExpectancy('male', 80, false, false);
    lifeExpectancy.ifPastExpected();
    expect(lifeExpectancy.lifePast).toEqual(4);
  });
  test('should properly calculate that the person is not past the year life expectancy', () => {
    let lifeExpectancy = new LifeExpectancy('male', 45, false, false);
    lifeExpectancy.ifPastExpected();
    expect(lifeExpectancy.lifePast).toEqual(0);
  });
})