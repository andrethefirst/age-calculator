export default class Mercury {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = parseFloat((age/.24).toFixed())
  }
  lifeLeftonMercury(lifeLeft) {
    this.mercuryLifeLeft = parseFloat((lifeLeft/.24).toFixed());
  }
}