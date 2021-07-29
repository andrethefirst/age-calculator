import Mercury from "../src/mercury"



describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Mercury(21);
  });

  test('should correctly calculate users earth age to their mercury age', () => {
    expect(mercury.mercuryAge).toEqual(88)
  })
})