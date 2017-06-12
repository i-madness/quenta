import { random, capitalize } from 'lodash'

/**
 * Перечисление возможных полов персонажа
 */
export const Genders = {
  MALE: 'M',
  FEMALE: 'F',
  OTHER: 'O'
}

/**
 * Получает случайный элемент переданного массива
 * @param {Array<any>} array 
 */
export const randomInArr = array => array[random(0, array.length - 1)]

/**
 * Генератор имён. 
 * TODO: Должно быть несколько способов генерить имена:
 * - какой-то набор имён будет захардкожен в приложении
 * - сложение некоторых захардкоженных кусков имён
 * - загрузка внешних словарей с именами
 */
export default class NameFactory {
  static names = ['Вася', 'Маша', 'Рандозис', 'Рамзес']

  static maleNameParts = {
    1: ['алас', 'тэр', 'мон', 'фрел', 'цум', 'рон', 'эл'],
    2: ['дил', 'шим', 'кай', 'мэй', 'эль', 'ол', 'хим', 'рой', "ронд", "он", "сим"]
  }

  static femaleNameParts = {
    1: ['лора', 'тэр', 'мон', 'фрел', 'цум', 'рон', 'эл', 'ака'],
    2: ['дина', 'шима', 'кая', 'мэй', 'эль', 'ола', 'ра', 'ада', 'иль', "да", 'лия', 'ья', 'ия']
  }

  static getRandomName(gender) {
    switch(gender) {
      case Genders.MALE: {
        return capitalize(randomInArr(this.maleNameParts[1]) + randomInArr(this.maleNameParts[2]))
      }
      case Genders.FEMALE: {
        return capitalize(randomInArr(this.femaleNameParts[1]) + randomInArr(this.femaleNameParts[2]))
      }
      default: {
        return randomInArr(this.names)
      }
    }
    
  }
}