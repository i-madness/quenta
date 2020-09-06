import React from 'react'
import { Switch, Route, NavLink, useParams, useRouteMatch } from 'react-router-dom'
import { useStore } from 'react-redux'
import * as LocaleConstants from 'localization'

import './CharBook.scss'

function Sidebar({ url, currentLocale, charEntries }) {
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

function CharacterInfo({ currentLocale, charEntries }) {
  const { charId } = useParams()
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
        {entry.artSource &&
          <div>
            <span className="char-book__art-source">
              {LocaleConstants[currentLocale].charBook.SOURCE_LABEL}
            </span>
            &nbsp;
            <a href={entry.artSource.link} className="char-book__art-source-link">
              {entry.artSource.name || entry.artSource.link}
            </a>
          </div>
        }
      </div>
      <div><strong>{LocaleConstants[currentLocale].charBook.CLASS_LABEL}</strong> {entry.captions[currentLocale].class} ({entry.captions[currentLocale].subclass})</div>
      <div><strong>{LocaleConstants[currentLocale].charBook.RACE_LABEL}</strong> {entry.captions[currentLocale].race}</div>
      <div>{entry.captions[currentLocale].bio}</div>
    </>
  )
}

export default function CharBook() {
  const { path, url } = useRouteMatch()
  const { currentLocale, charEntries } = useStore().getState().charBookReducer

  return (
    <section className="char-book">
      <Sidebar
        url={url}
        charEntries={charEntries}
        currentLocale={currentLocale}
      />
      <section className="char-book__content">
        <Switch>
          <Route exact path={path}>
            <h3>{LocaleConstants[currentLocale].charBook.SELECT_CHARACTER_MSG}</h3>
          </Route>
          <Route path={`${path}/:charId`}>
            <CharacterInfo
              currentLocale={currentLocale}
              charEntries={charEntries}
            />
          </Route>
        </Switch>
      </section>
    </section>
  )
}