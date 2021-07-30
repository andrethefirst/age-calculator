export default class LifeExpectancy {
  constructor(gender, alcConsum, smoker) {
    let avgLifeSpan = 79;
    if(gender === 'male') {
      avgLifeSpan -= 3;
    } else if (gender === 'female') {
      avgLifeSpan += 2;
    }
    if(alcConsum ===  true) {
        avgLifeSpan -= 2;
    }
    if(smoker === true) {
      avgLifeSpan -= 10;
    }
    this.avgLifeExpect = avgLifeSpan;
  }
}