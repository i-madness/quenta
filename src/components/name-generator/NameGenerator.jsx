import React, { Component } from 'react'
import { processName } from '../../utils/names.util'
import { isEmpty } from 'lodash'

import './NameGenerator.scss'

class NameGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      allNames: []
    }
  }

  generate = () => {
    if (this.state.name) {
      this.setState(state => ({
        name: '',
        allNames: [...state.allNames, processName(state.name)]
      }))
    }
  }

  render() {
    return (
      <div id="name-generator">
        <div className="generator-input-group">
          <input
            className="generator-input"
            value={this.state.name}
            placeholder="Введите имя/название"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button
            disabled={isEmpty(this.state.name)}
            onClick={this.generate}
          >
            Сохранить
          </button>
          {/*<div className="flags">
            hey
          </div>*/}
        </div>
        <div className="all-names">
          {this.state.allNames.map(name => <div key={name}>{name}</div>)}
        </div>
      </div>
    )
  }
}

export default NameGenerator