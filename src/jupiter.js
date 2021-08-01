export default class Jupiter {
  constructor(age) {
    this.earthAge = age;
    this.jupiterAge = parseFloat((age/11.86).toFixed());
  }
  lifeLeftonJupiter(lifeLeft) {
    this.jupiterLifeLeft = parseFloat((lifeLeft/11.86).toFixed());
  }

}