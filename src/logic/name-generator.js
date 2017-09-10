import { capitalize } from 'lodash'
import { randomInArr } from '../application-utils'

/**
 * Перечисление возможных полов персонажа
 */
export const Genders = {
  MALE: 'Мужской',
  FEMALE: 'Женский',
  OTHER: 'Другой'
}

/*
 * Генератор имён. 
 * TODO: Должно быть несколько способов генерить имена:
 * - какой-то набор имён будет захардкожен в приложении
 * - сложение некоторых захардкоженных кусков имён
 * - загрузка внешних словарей с именами
 */
const firstParts = ["алас", "тэр", "мон", "фрел", "цум", "рон", "эл", "рол", "кай", "дем", "де", "тор", "кил", "гэл", 'леп', "лагр", "фес", "фел", "анг", "ранд", "так", "рем", "карс", "джакс", "али", "куман", "лора", "ака", "сар", "мира", "нира", "ар", "ки", "о'", "пирс", "кин", "тари", "мек", "ун", "пара", "лито"]

const maleNameParts = ['дил', 'шим', 'кай', 'мэй', 'эль', 'ол', 'хим', 'рой', "ронд", "он", "сим", "гранж", 'филд', 'талас', 'стер', 'зул', 'кард', 'кил', "дес", "ранг", "огил", "зис", "тан", "тео", "лес", "ст", 'вит', 'пе', "теск", "ольм", "тен", "мон", "зен", "ис", "ус", "нус", "нис", "гус", "нус", "анс", "альд", "бальд", "мир", "лир", "тум"]

const femaleNameParts = ['дина', 'шима', 'кая', 'мэй', 'эль', "кина", "энь", "уфа", "уха", "тесс", "эсс", 'ола', 'ра', "вен", 'ада', 'бра', 'иль', "да", 'лия', 'ья', 'ия', 'теса', "ла", "мара", "на", "минель", "леса", "иса", "тея", "тер", "тра", "нья"]

const otherNameParts = [ "кет", "зе", "мезе", "ше", "пе", "льпе", "фес", "сис", "'фе", "мо", "умо", "уно", "пург", "тарпо", "ольмо", "зефф", "черс", "тур", "'омо", "рене", "рено", "шефе", "оссе", "'харж", "бре", "те", "ги", "иги", "зулу"]

export function getRandomName(gender) {
  switch (gender) {
    case Genders.MALE: {
      return capitalize(randomInArr(firstParts) + randomInArr(maleNameParts))
    }
    case Genders.FEMALE: {
      return capitalize(randomInArr(firstParts) + randomInArr(femaleNameParts))
    }
    default: {
      let twistParameter = "" // здесь присутствует возможность расширения имени дополнительным слогом
      let twistCoefficient = Math.random() * 10 + 1
      if (twistCoefficient <= 1) {
        twistParameter = randomInArr(maleNameParts)
      } else if (twistCoefficient > 1 && twistCoefficient <= 3) {
        twistParameter = randomInArr(femaleNameParts)
      }
      return capitalize(randomInArr(firstParts) + twistParameter + randomInArr(otherNameParts))
    }
  }
}