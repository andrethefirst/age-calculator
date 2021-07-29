export default class Venus {
  constructor(age) {
    this.earthAge = age;
    this.venusAge = parseFloat((age/.62).toFixed());
  }
}