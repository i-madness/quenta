import Race from '../model/race'

/**
 * Изначально эта функция должна дёргать расы откда-то, но на данный момент
 * ограничиваемся этой заглушкой
 */
export function getRaces() {
  let o = new Race("Орк")
  let e = new Race("Эльф")
  e.subraces.push(new Race("Тёмный эльф"), new Race("Лесной эльф"))
  let g = new Race("Гоблин")
  let d = new Race("Гном")
  let w = new Race("Динозавра")
  w.subraces.push(new Race("Дейноних"), new Race("Тираннозавр"))
  return [
    o, e, g, d, w
  ]
}