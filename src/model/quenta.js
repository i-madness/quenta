
export default class Quenta {
  constructor(name, gender, race, age, description, alignment, skills) {
    this.name = name
    this.gender = gender
    this.race = race
    this.age = age
    this.description = description
    this.alignment = alignment
    this.skills = skills
    // location
    // faction
  }

  equals(otherQuenta) {
    return this.name === otherQuenta.name && this.description === otherQuenta.description
  }
}