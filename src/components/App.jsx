import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Logo } from './logo/Logo'
import {
  Route,
  Switch,
} from "react-router-dom"
import routes from './routes'
import { loadEntries, changeLocale } from 'reducers/char-book.actions'
import * as LocaleConstants from 'localization'

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
              {LocaleConstants[this.props.locale].navbarCaptions.links[r.textKey]}
            </NavLink>
          ))}
          <div className="spacer"/>
          <span
            className="app-header__lang-switch"
            title={LocaleConstants[this.props.locale].navbarCaptions.LANGUAGE_TOGGLE_MSG}
            onClick={() => this.changeLocale()}
          >
            {LocaleConstants[this.props.locale].LOCALE_CAPTION}
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