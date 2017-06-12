export default class Race {
  constructor(name) {
    this.name = name
    this.subraces = []
  }

  addSubRace(subrace) {
    if (subrace && subrace.name) {
      this.subraces.push(subrace)
      return
    }
    throw new Error('У под-расы нет имени')
  }
}