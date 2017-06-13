import { Skillset, Skill } from '../model/skillset'
import { skillsets } from '../preset-kk'

/**
 * Заглушка для получения сетов умений
 */
export function getSkillsets() {
  let skillsetList = sortBy(
    skillsets.map(set => {
      let skills = sortBy(set.skills.map(skill => new Skill(skill.name, skill.level, set, skill.isActive)), skill => skill.level) 
      return new Skillset(set.name, set.superset, set.pic, skills)
    }),
    set => set.name
  )
  return Promise.resolve(skillsetList)
}