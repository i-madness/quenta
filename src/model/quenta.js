/**
 * Профиль персонажа, содержащий набор его характеристик
 */
export default class Quenta {
  constructor(name, gender, race, age, description, alignment, skills, picture) {
    this.name = name
    this.gender = gender
    this.race = race
    this.age = age
    this.description = description
    this.alignment = alignment
    this.skills = skills
    this.picture = picture
  }

  static fromPlainObject(obj) {
    let { name, gender, race, age, description, alignment, skills, picture } = obj
    return new Quenta(name, gender, race, age, description, alignment, skills, picture)
  }

  equals(otherQuenta) {
    return this.name === otherQuenta.name && this.description === otherQuenta.description
  }
}