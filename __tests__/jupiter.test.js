import Jupiter from '../src/jupiter'
import LifeExpectancy from '../src/lifeExpectancy';

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter(21);
  });

  test('should correctly calculate users age to their jupiter age', () => {
    expect(jupiter.jupiterAge).toEqual(2);
  });

  test('should correctly calculate users remaining life left on jupiter', () => {
    let lifeExpectancy = new LifeExpectancy('male', 21, true, true);
    let jupiterTwo = new Jupiter(21);
    jupiterTwo.lifeLeftonJupiter(lifeExpectancy.remainingLife);
    expect(jupiterTwo.jupiterLifeLeft).toEqual(4);
  });
})