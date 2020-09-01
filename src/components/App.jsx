import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './logo/Logo'
import {
  Route,
  Switch,
} from "react-router-dom"
import routes from './routes'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div id="application-layout">
        <nav className="app-header">
          <Logo />
          {routes.map((r, index) => (
            <Link className="app-header--link" key={index} to={r.path}>
              {r.text}
            </Link>
          ))}
        </nav>
        <article className="app-content">
          <Switch>
            {routes.map((r, index) => (
              <Route
                key={index}
                exact={r.exact}
                path={r.path}
              >
                <r.component />
              </Route>
            ))}
          </Switch>
        </article>
        <footer className="app-footer">
          © Valery Romanov, 2019 - {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default App