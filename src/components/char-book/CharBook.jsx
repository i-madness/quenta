import React from 'react'
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

import './CharBook.scss'

const exampleChars = {
  'witch': {
    name: 'Ведьма',
    icon: 'https://i.ibb.co/xzThWQx/image.png',
    text: 'Ведьма, что живёт в мрачном лесу',
  },
  'witcher': {
    name: 'Ведьмак',
    icon: 'https://i.ibb.co/txjCQ4h/image.png',
    text: 'Ведьмак, что терпит лютую ведьму',
  },
  'mushroom': {
    name: 'Грибочек',
    icon: 'https://i.ibb.co/q57Fccc/image.png',
    text: 'Безобидный грибочек',
  },
  'burning-head': {
    name: 'Горящая Головушка',
    icon: 'https://i.ibb.co/565pFk5/image.png',
    text: 'Не пейте слишком много бензина, плиз',
  },
  'kind-fishy': {
    name: 'Добрая Рыбонька',
    icon: 'https://i.ibb.co/QjWYZbk/image.png',
    text: 'Самая добрая Рыбонька на свете',
  },
}

function Sidebar({ url }) {
  return (
    <aside className="char-book--sidebar">
      {Object.entries(exampleChars).map((character, index) => (
        <Link
          to={`${url}/${character[0]}`}
          className="char-book--preview-block"
          key={index}
        >
          <img className="char-book--preview-image" src={character[1].icon} alt={character[1].name}/>
          <span className="char-book--preview-name">{character[1].name}</span>
        </Link>
      ))}
    </aside>
  )
}

function CharacterInfo() {
  const { charId } = useParams()
  const character = exampleChars[charId]

  return (
    <>
      <h3>{character.name}</h3>
      <div>{character.text}</div>
    </>
  )
}

export default function CharBook() {
  const { path, url } = useRouteMatch()

  return (
    <section className="char-book">
      <Sidebar url={url}/>
      <section className="char-book--content">
        <Switch>
          <Route exact path={path}>
            <h3>Please select a character</h3>
          </Route>
          <Route path={`${path}/:charId`}>
            <CharacterInfo/>
          </Route>
        </Switch>
      </section>
    </section>
  )
}