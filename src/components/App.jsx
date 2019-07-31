import React from 'react'
import NameGenerator from './name-generator/NameGenerator'
import { Logo } from './logo/Logo'

import './App.scss'

export default function (props) {
  return (
    <div id="application-layout">
      <header className="app-header">
        <Logo />
      </header>
      <article className="app-content">
        <NameGenerator />
      </article>
      <footer className="app-footer">
        Copyright
      </footer>
    </div>
  )
}