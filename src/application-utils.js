import React from 'react'
import { random } from 'lodash'

/*=======================================================================
 * Набор вспомогательных функций для всевозможных вещей
 =======================================================================*/

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

/**
 * Оборачивает многострочную строку в JSX-элементы <p>...</p>
 * @param {String} text 
 */
export const createTextParagraphs = text => Array.from(text.split(/\n/)).map((paragraph, idx) => <p key={idx}>{paragraph}</p>)