
export default class Quenta {
  constructor(name, gender, description, alignment) {
    this.name = name
    this.gender = gender
    this.description = description
    this.alignment = alignment
    // birth place
    // location
    // faction
    // skills
  }

  equals(otherQuenta) {
    return this.name === otherQuenta.name && this.description === otherQuenta.description
  }
}