import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Logo } from './logo/Logo'
import {
  Route,
  Switch,
} from "react-router-dom"
import routes from './routes'
import { loadEntries, changeLocale } from '../reducers/char-book.actions'

import './App.scss'

const mapStateToProps = state => {
  return {
    entries: state.charBookReducer.charEntries,
    locale: state.charBookReducer.currentLocale
  }
}

const mapDispatchToProps = dispatch => ({
  loadEntries: () => dispatch(loadEntries()),
  changeLocale: (locale) => dispatch(changeLocale(locale))
})

class App extends Component {
  componentDidMount() {
    this.props.loadEntries()
  }

  changeLocale() {
    this.props.changeLocale(this.props.locale === 'en' ? 'ru' : 'en')
  }

  render() {
    return (
      <div id="application-layout">
        <nav className="app-header">
          <Logo />
          {routes.map((r, index) => (
            <NavLink
              className="app-header__link"
              key={index}
              to={r.path}
            >
              {r.isLegacy && <span className="app-header__legacy-label">legacy</span>}
              {r.text}
            </NavLink>
          ))}
          <span
            className="app-header__lang-switch"
            title={this.props.locale === 'en' ? 'Переключить на русский язык' : 'Switch to english'}
            onClick={() => this.changeLocale()}
          >
            {this.props.locale === 'en' ? 'EN' : 'RU'}
          </span>
        </nav>
        <article className="app-content">
          <Switch>
            {routes.map((r, index) => (
              <Route
                key={index}
                exact={r.exact}
                path={r.path}
              >
                <r.component locale={this.props.locale} />
              </Route>
            ))}
          </Switch>
        </article>
        <footer className="app-footer">
          © V.Scarlet, 2019 - {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)