import { Skillset, Skill } from '../model/skillset'
import presetMap from './preset-manager'
import { sortBy } from 'lodash'

/**
 * Заглушка для получения сетов умений из заранее заготовленного сета
 * * * TODO: 
 * * - определиться с принципом хранения данных, в том числе и пре-сетов;
 * * - избавиться от заглушек
 */
export function getSkillsets(presetName) {
  let { skillsets } = presetMap[presetName]
  let skillsetList = sortBy(
    skillsets.map(set => {
      let skills = sortBy(set.skills.map(skill => new Skill(skill.name, skill.level, set, skill.isActive)), skill => skill.level)
      return new Skillset(set.name, set.superset, set.pic, skills)
    }),
    set => set.name
  )
  return Promise.resolve(skillsetList)
}