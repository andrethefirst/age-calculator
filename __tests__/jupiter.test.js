import Jupiter from '../src/jupiter'

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter(21);
  });

  test('should correctly calculate users age to their jupiter age', () => {
    expect(jupiter.jupiterAge).toEqual(2);
  });
})