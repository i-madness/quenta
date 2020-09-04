import React from 'react'
import { Switch, Route, NavLink, useParams, useRouteMatch } from 'react-router-dom'
import { useStore } from 'react-redux'

import './CharBook.scss'

function Sidebar({ url }) {
  const { currentLocale, charEntries } = useStore().getState().charBookReducer
  return (
    <aside className="char-book__sidebar">
      {charEntries.map((character, index) => (
        <NavLink
          to={`${url}/${character.id}`}
          className="char-book__preview-block"
          activeClassName="active"
          key={index}
        >
          <img className="char-book__preview-image" src={character.tokenImg} alt={character.name}/>
          <span className="char-book__preview-name">{character.captions[currentLocale].name}</span>
        </NavLink>
      ))}
    </aside>
  )
}

function CharacterInfo() {
  const { charId } = useParams()
  const { currentLocale, charEntries } = useStore().getState().charBookReducer
  const entry = charEntries.find(character => character.id === charId)

  if (!entry) {
    return <h3>Invalid entry</h3>
  }
  return (
    <>
      <span className="char-book__character-caption">
        {entry.captions[currentLocale].name}
      </span>
      <div className="char-book__main-image-wrapper">
        <img
          src={entry.mainImg}
          alt={entry.captions[currentLocale].name}
          className="char-book__main-image"
        />
      </div>
      <div>{entry.captions[currentLocale].bio}</div>
    </>
  )
}

export default function CharBook() {
  const { path, url } = useRouteMatch()

  return (
    <section className="char-book">
      <Sidebar url={url}/>
      <section className="char-book__content">
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