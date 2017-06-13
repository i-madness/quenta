import Race from '../model/race'
import { sortBy } from 'lodash'
import { races } from '../preset-kk'

/**
 * Изначально эта функция должна дёргать расы откда-то, но на данный момент
 * ограничиваемся этой заглушкой
 */
export function getRaces() {
  /*return fetch('/races.json')
    .then(resp => resp.json())
    .then(json => {
      let races = sortBy(json.map(entry => {
        return new Race(entry.name, entry.subraces.sort().map(sub => new Race(sub, null)))
      }), race => race.name)
      return Promise.resolve(races)
    })*/
  let raceList = sortBy(races.map(entry => {
    return new Race(entry.name, entry.subraces.sort().map(sub => new Race(sub, null)))
  }), race => race.name)
  return Promise.resolve(raceList)
}