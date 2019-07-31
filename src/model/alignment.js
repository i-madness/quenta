import { randomInArr } from '../application-utils'

/**
 * Мировоззрение персонажа
 */
export const Alignment = {
  LAWFUL_GOOD: ['LG', 'Законопослушный добрый'],
  NEUTRAL_GOOD: ['NG', 'Нейтральный добрый'],
  CHAOTIC_GOOD: ['CG', 'Хаотичный добрый'],

  LAWFUL_NEUTRAL: ['LN', 'Законопослушный нейтральный'],
  TRUE_NEUTRAL: ['TN', 'Истинно нейтральный'],
  CHAOTIC_NEUTRAL: ['CN', 'Хаотичный нейтральный'],

  LAWFUL_EVIL: ['LE', 'Законопослушный злой'],
  NEUTRAL_EVIL: ['NE', 'Нейтральный злой'],
  CHAOTIC_EVIL: ['CE', 'Хаотичный злой']
}

/**
 * Возвращает случайное мировоззрение
 */
export function randomAlignment() {
  let name = randomInArr(Object.keys(Alignment))
  return Alignment[name]
}