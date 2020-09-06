import CharBook from './char-book/CharBook'
import NameGenerator from './name-generator/NameGenerator'

const routes = [
  {
    textKey: 'charCatalog',
    path: '/char-book',
    component: CharBook,
  },
  {
    textKey: 'nameGen',
    path: '/name-gen',
    component: NameGenerator,
    isLegacy: true
  },
]

export default routes