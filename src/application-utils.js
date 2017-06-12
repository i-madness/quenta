import { random } from 'lodash'

/**
 * Получает случайный элемент переданного массива
 * @param {Array<any>} array 
 */
export const randomInArr = array => array[random(0, array.length - 1)]