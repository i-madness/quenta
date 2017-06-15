/**
 * Модель для умения персонажа
 */
export class Skill {
  constructor(name, level, skillset, isActive) {
    if (!name || !skillset) {
      throw new Error("Имя и набор умений должны быть указаны обязательно")
    }
    this.name = name
    this.level = level
    this.skillset = skillset
    this.isActive = isActive || false
  }
}

/**
 * Модель для набора умений персонажа
 */
export class Skillset {
  constructor(name, superset, pic, skills) {
    this.name = name
    this.superset = superset
    this.pic = pic
    this.skills = skills || []
  }

  /**
   * Добавляет умение в набор
   * @param {Skill} skill 
   */
  addSkill(skill) {
    if (!skill instanceof Skill) {
      throw new Error('Переданный аргумент не является объектом Skill')
    }
    this.skills.push(skill)
  }
}