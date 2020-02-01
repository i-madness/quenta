import React, { Component } from 'react'
import { processName } from '../../utils/names.util'
import { Genders, getRandomName } from '../../logic/name-generator'
import { NameContainer } from '../name-container/NameContainer'
import isEmpty from 'lodash/isEmpty'

import * as NameMode from '../../model/view/name-mode'
import './NameGenerator.scss'

class NameGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      allNames: [],
      nameMode: NameMode.CHARACTER,
      gender: Genders.MALE
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
            mode: state.nameMode,
            gender: state.gender
          }
        ]
      }))
    }
  }

  generateName = () => {
    this.setState(state => ({
      name: getRandomName(state.gender)
    }))
  }

  render() {
    return (
      <section className="name-generator">
        <div className="name-generator__input-group">
          <input
            className="name-generator__input"
            value={this.state.name}
            placeholder="Введите имя/название"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button
            className="name-generator__button name-generator__button-generate"
            onClick={this.generateName}
          >
            Сгенерировать
          </button>
          <button
            className="name-generator__button name-generator__button-save"
            disabled={isEmpty(this.state.name)}
            onClick={this.saveName}
          >
            Сохранить
          </button>
        </div>

        <form className="flags">
          <input
            type="radio"
            checked={this.state.nameMode === NameMode.CHARACTER}
            onChange={() => this.setState({ nameMode: NameMode.CHARACTER })}
            id="rb-character"
          />
          <label htmlFor="rb-character">Персонаж</label>
          <input
            type="radio"
            checked={this.state.nameMode === NameMode.OBJECT}
            onChange={() => this.setState({ nameMode: NameMode.OBJECT })}
            id="rb-object"
          />
          <label htmlFor="rb-object">Объект</label>
        </form>

        {this.state.nameMode === NameMode.CHARACTER &&
        <form className="flags">
          <input
            type="radio"
            checked={this.state.gender === Genders.MALE}
            onChange={() => this.setState({gender: Genders.MALE})}
            id="rb-male"
          />
          <label htmlFor="rb-male">Мужской</label>
          <input
            type="radio"
            checked={this.state.gender === Genders.FEMALE}
            onChange={() => this.setState({gender: Genders.FEMALE})}
            id="rb-female"
          />
          <label htmlFor="rb-female">Женский</label>
          <input
            type="radio"
            checked={this.state.gender === Genders.OTHER}
            onChange={() => this.setState({gender: Genders.OTHER})}
            id="rb-other-gender"
          />
          <label htmlFor="rb-other-gender">Другой</label>
        </form>
        }
        <NameContainer names={this.state.allNames} />
      </section>
    )
  }
}

export default NameGenerator