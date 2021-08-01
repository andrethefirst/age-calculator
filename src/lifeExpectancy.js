export default class LifeExpectancy {
  constructor(gender, age, alcConsum, smoker) {
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
    this.remainingLife = (avgLifeSpan - age);
  }
  ifPastExpected() {
    if (this.remainingLife <0){
      this.lifePast = Math.abs(this.remainingLife);
    } else {
      this.lifePast = 0;
    }
  }
}