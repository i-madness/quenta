
export default class Quenta {
  constructor(name, description) {
    this.name = name
    this.description = description
    // birth place
    // location
    // faction
    // skills
  }

  equals(otherQuenta) {
    return this.name === otherQuenta.name && this.description === otherQuenta.description
  }


}