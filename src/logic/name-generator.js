import { capitalize } from 'lodash'
import { randomInArr } from '../application-utils'

/**
 * Перечисление возможных полов персонажа
 */
export const Genders = {
  MALE: 'M',
  FEMALE: 'F',
  OTHER: 'O'
}

/*
 * Генератор имён. 
 * TODO: Должно быть несколько способов генерить имена:
 * - какой-то набор имён будет захардкожен в приложении
 * - сложение некоторых захардкоженных кусков имён
 * - загрузка внешних словарей с именами
 */
const names = ['Вася', 'Маша', 'Рандозис', 'Рамзес']

const maleNameParts = {
  1: ['алас', 'тэр', 'мон', 'фрел', 'цум', 'рон', 'эл', "рол", "кай", "эл", "дем", "тор", "кил", "гэл", "лагр", 'фел', 'анг', "ранд"],
  2: ['дил', 'шим', 'кай', 'мэй', 'эль', 'ол', 'хим', 'рой', "ронд", "он", "сим", "гранж", 'филд', 'талас', 'стер', 'зул', 'кард', 'кил', "ранг", "огил"]
}

const femaleNameParts = {
  1: ['лора', 'тэр', 'мон', 'фрел', 'цум', 'рон', 'эл', 'ака', "сар", "мира", "нира", "ки", "о'", "пирс"],
  2: ['дина', 'шима', 'кая', 'мэй', 'эль', 'ола', 'ра', 'ада', 'иль', "да", 'лия', 'ья', 'ия', 'теса', "ла", "мара", "на"]
}

export function getRandomName(gender) {
  switch (gender) {
    case Genders.MALE: {
      return capitalize(randomInArr(maleNameParts[1]) + randomInArr(maleNameParts[2]))
    }
    case Genders.FEMALE: {
      return capitalize(randomInArr(femaleNameParts[1]) + randomInArr(femaleNameParts[2]))
    }
    default: {
      return randomInArr(names)
    }
  }
}