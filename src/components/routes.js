import CharBook from './char-book/CharBook'
import NameGenerator from './name-generator/NameGenerator'

const routes = [
  // TODO localizations instead of raw text
  {
    text: 'Каталог персонажей',
    path: '/char-book',
    //exact: true,
    component: CharBook,
  },
  {
    text: '[legacy] Генератор имён',
    path: '/name-gen',
    component: NameGenerator,
  },
]

export default routes