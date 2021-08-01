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

  })
})