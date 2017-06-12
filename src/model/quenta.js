
export default class Quenta {
  constructor(name, gender, description) {
    this.name = name
    this.gender = gender
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