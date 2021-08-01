import LifeExpectancy from "../src/lifeExpectancy";
import Mercury from "../src/mercury"



describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Mercury(21);
  });

  test('should correctly calculate users earth age to their mercury age', () => {
    expect(mercury.mercuryAge).toEqual(88)
  })

  test('should correctly calculate users remaining life on mercury', () => {
    let lifeExpectancy = new LifeExpectancy('male', 21, true, true);
    let mercuryTwo = new Mercury(21);
    mercuryTwo.lifeLeftonMercury(lifeExpectancy.remainingLife);
    expect(mercuryTwo.mercuryLifeLeft).toEqual(179);
  })
})