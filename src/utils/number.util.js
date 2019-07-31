/**
 * Получает случайный элемент переданного массива
 * @param {Array<any>} array
 */
export const randomInArr = array => array[random(0, array.length - 1)]

/**
 * Возвращает случайное число в заданном диапазоне
 * @param {Number} min
 * @param {Number} max
 */
export const randomIn = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
