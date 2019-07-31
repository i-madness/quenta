import React, { Component } from 'react'
import { processName } from '../../utils/names.util'

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
        <div>Введите имя/название</div>
        <div>
          <input
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button onClick={this.generate}>
            Button
          </button>
        </div>
        <div className="all-names">
          {this.state.allNames.map(name => <div key={name}>{name}</div>)}
        </div>
      </div>
    )
  }
}

export default NameGenerator