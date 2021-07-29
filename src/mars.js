export default class Mars {
  constructor(age) {
    this.earthAge = age;
    this.marsAge = parseFloat((age*1.88).toFixed());
  }
}