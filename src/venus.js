export default class Venus {
  constructor(age) {
    this.earthAge = age;
    this.venusAge = parseFloat((age/.62).toFixed());
  }
  lifeLeftonVenus(lifeLeft) {
    this.venusLifeLeft = parseFloat((lifeLeft/.62).toFixed());
  }
}