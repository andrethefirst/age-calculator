import LifeExpectancy from "../src/lifeExpectancy";
import Venus from "../src/venus"

describe('Venus', () => {

  let venus;

  beforeEach(() => {
    venus = new Venus(21);
  });

  test('should correctly calculate users age to their venus age', () => {
    expect(venus.venusAge).toEqual(34)
  });

  test('should correctly calculate users remaining age on venus', () => {
    let lifeExpectancy = new LifeExpectancy('male', 21, true, true);
    let venusTwo = new Venus(21);
    venusTwo.lifeLeftonVenus(lifeExpectancy.remainingLife);
    expect(venusTwo.venusLifeLeft).toEqual(69);
  })
})