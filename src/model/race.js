export default class Race {
  constructor(name, subraces) {
    this.name = name
    this.subraces = subraces
  }

  addSubRace(subrace) {
    if (subrace && subrace.name) {
      this.subraces.push(subrace)
      return
    }
    throw new Error('У под-расы нет имени')
  }
}