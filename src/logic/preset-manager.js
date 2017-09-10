import { races as vanillaRaces, skillsets as vanillaSkillsets } from '../preset-vanilla'
import { races as kkRaces, skillsets as kkSkillsets } from '../preset-kk'

const presetMap = {
  vanilla: {
    races: vanillaRaces,
    skillsets: vanillaSkillsets
  },
  kk: {
    races: kkRaces,
    skillsets: kkSkillsets
  },
  custom: {
    races: undefined,
    skillsets: undefined
  }
}

export default presetMap