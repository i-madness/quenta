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

/**
 * Маппинг мировоззрений на bootstrap-классы
 * @param alignment - одна из записей в объекте Alignment
 */
export function alignmentClass(alignment) {
  if (!alignment || !alignment[0]) {
    throw new Error("Передаваемый аргумент не является записью из перечисления мировоззрений")
  }
  switch (alignment[0][1]) {
    case 'G': {
      return 'success'
    }
    case 'E': {
      return 'danger'
    }
    default : {
      return 'info'
    }
  }
}