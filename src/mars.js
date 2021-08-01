export default class Mars {
  constructor(age) {
    this.earthAge = age;
    this.marsAge = parseFloat((age/1.88).toFixed());
  }
  lifeLeftonMars(lifeLeft) {
    this.marsLifeLeft = parseFloat((lifeLeft/1.88).toFixed());
  };
}