import Race from '../model/race'
import { sortBy } from 'lodash'
import presetMap from './preset-manager'

/**
 * Получает расы из заранее заготовленного набора.
 * * TODO: 
 * * - определиться с принципом хранения данных, в том числе и пре-сетов;
 * * - избавиться от заглушек
 */
export function getRaces(presetName) {
  let { races } = presetMap[presetName]
  let raceList = sortBy(races.map(entry => {
    return new Race(entry.name, entry.subraces.sort().map(sub => new Race(sub, null)))
  }), race => race.name)
  return Promise.resolve(raceList)
}