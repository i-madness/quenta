import React, { Component } from 'react'
import { processName } from '../../utils/names.util'
import { isEmpty } from 'lodash'
import { NameContainer } from '../name-container/NameContainer'

import * as NameMode from '../../model/view/name-mode'
import './NameGenerator.scss'

class NameGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      allNames: [],
      nameMode: NameMode.CHARACTER
    }
  }

  saveName = () => {
    if (this.state.name) {
      this.setState(state => ({
        name: '',
        allNames: [
          ...state.allNames,
          {
            value: processName(state.name),
            mode: state.nameMode
          }
        ]
      }))
    }
  }

  render() {
    return (
      <section id="name-generator">
        <div className="generator-input-group">
          <input
            className="generator-input"
            value={this.state.name}
            placeholder="Введите имя/название"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button
            disabled={isEmpty(this.state.name)}
            onClick={this.saveName}
          >
            Сохранить
          </button>
        </div>
        <div className="flags">
          <input
            type="radio"
            checked={this.state.nameMode === NameMode.CHARACTER}
            onChange={() => this.setState({ nameMode: NameMode.CHARACTER })}
            id="rb-character"
          />
          <label for="rb-character">Персонаж</label>
          <input
            type="radio"
            checked={this.state.nameMode === NameMode.OBJECT}
            onChange={() => this.setState({ nameMode: NameMode.OBJECT })}
            id="rb-object"
          />
          <label for="rb-object">Объект</label>
        </div>
        <NameContainer names={this.state.allNames} />
      </section>
    )
  }
}

export default NameGenerator