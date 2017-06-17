/* eslint-disable */
import React, { Component } from 'react'
import store from '../store'
import { connect } from 'react-redux'
import SkillBlock from './SkillBlock'
import {
  FormControl, FormGroup, HelpBlock, Navbar, NavItem, Nav, InputGroup, Button,
  OverlayTrigger, Tooltip, ButtonGroup, Panel
} from 'react-bootstrap'
import Quenta from '../model/quenta'
import { Alignment, alignmentClass } from '../model/alignment'
import { Genders, getRandomName } from '../logic/name-generator'
import { getRaces } from '../logic/race-provider'
import { randomIn, randomInArr } from '../application-utils'
import { ACTION_TYPES as QuentaActions } from '../reducers/quenta-reducer'
import { ACTION_TYPES as SkillActions } from '../reducers/skill-reducer'
import './styles/NewProfile.css'

const tooltip = text => (<Tooltip id="tooltip">{text}</Tooltip>)

const initialComponentState = () => ({
  name: '',
  description: '',
  age: 20,
  gender: Genders.MALE,
  alignment: Alignment.TRUE_NEUTRAL,
  race: { name: '', subraces: [] },
  subRace: { name: '' },
  saveDisabled: true
})

/**
 * Компонент для создания новых квент
 */
class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = initialComponentState()
    this.saveProfile = this.saveProfile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.selectGender = this.selectGender.bind(this)
    this.selectAlignment = this.selectAlignment.bind(this)
  }

  /**
   * Сохранить квенту
   */
  saveProfile() {
    let { name, gender, race, age, description, alignment, subRace } = this.state
    let skills = this.props.store.skillReducer.currentQuentaSkills
    store.dispatch({ type: 'QUENTA_CREATED', payload: new Quenta(name, gender, subRace.name ? subRace : race, age, description, alignment, skills) })
    this.clearState()
    store.dispatch({ type: SkillActions.QUENTA_CLEAR_SKILLS })
  }

  /**
   * Валидация формы
   */
  getValidationState() {
    const length = this.state.name.length;
    if (length) {
      this.state.saveDisabled = false
      return 'success'
    } else {
      this.state.saveDisabled = true
      return 'error'
    }
  }

  /**
   * Обработка изменений на форме и сохранение в локальное состояние
   * @param {Event} e 
   */
  handleChange(e) {
    if (e.target.id === 'race') {
      if (e.target.value === '(Выберите расу)') {
        return
      }
      this.setState({
        ...this.state,
        race: this.props.store.raceReducer.races.find(r => r.name === e.target.value)
      });
      return
    } else if (e.target.id === 'subRace') {
      this.setState({
        ...this.state,
        subRace: this.state.race.subraces.find(sr => sr.name === e.target.value)
      })
      return
    }
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  }

  /**
   * Генерирует случайное имя персонажа
   */
  randomizeName() {
    this.setState({
      ...this.state,
      name: getRandomName(this.state.gender),
      saveDisabled: false
    })
  }

  /**
   * Выбирает случайную расу из списка доступных рас
   */
  randomizeRace() {
    let { races } = this.props.store.raceReducer
    this.setState({
      ...this.state,
      race: races.length ? randomInArr(races) : this.state.race,
    })
  }

  /**
   * Выбирает случайную под-расу выбранной расы
   */
  randomizeSubRace() {
    if (!this.state.race.subraces.length) {
      return
    }
    this.setState({
      ...this.state,
      subRace: randomInArr(this.state.race.subraces),
    })
  }

  /**
   * Генерирует случайный возраст
   */
  randomizeAge() {
    this.setState({
      ...this.state,
      age: randomIn(1, 2000)
    })
  }

  /**
   * Генерирует все параметры квенты случайным образом
   */
  randomizeQuenta() {
    let { races } = this.props.store.raceReducer
    this.setState({
      ...this.state,
      gender: Genders[Object.keys(Genders)[randomIn(0, 2)]],
      age: randomIn(1, 2000),
      alignment: Alignment[Object.keys(Alignment)[randomIn(0, 8)]]
    })
    setTimeout(() => this.randomizeName(), 10)
    setTimeout(() => this.randomizeRace(), 10)
    setTimeout(() => this.randomizeSubRace(), 10)
  }

  /**
   * Обаработчик выбора пола
   * @param {Event} e 
   */
  selectGender(e) {
    this.setState({
      ...this.state,
      gender: ({
        maleGender: Genders.MALE,
        femaleGender: Genders.FEMALE,
        otherGender: Genders.OTHER
      })[e.target.id]
    })
  }

  /**
   * Обработчик выбора мировоззрения
   * @param {Event} e 
   */
  selectAlignment(e) {
    this.setState({
      ...this.state,
      alignment: ({
        alLG: Alignment.LAWFUL_GOOD,
        alNG: Alignment.NEUTRAL_GOOD,
        alCG: Alignment.CHAOTIC_GOOD,
        alLN: Alignment.LAWFUL_NEUTRAL,
        alTN: Alignment.TRUE_NEUTRAL,
        alCN: Alignment.CHAOTIC_NEUTRAL,
        alLE: Alignment.LAWFUL_EVIL,
        alNE: Alignment.NEUTRAL_EVIL,
        alCE: Alignment.CHAOTIC_EVIL
      })[e.target.id]
    })
  }

  clearState() {
    this.setState(initialComponentState())
  }

  render() {
    let alignments = Object.keys(Alignment)
      .map((al, i) => {
        let alSelected = Alignment[al]
        return (
          <OverlayTrigger placement="bottom" overlay={tooltip(alSelected[1])} key={i}>
            <Button className={this.state.alignment === alSelected ? 'btn btn-' + alignmentClass(Alignment[al]) : 'btn'}
              id={'al' + alSelected[0]} onClick={this.selectAlignment}>
              {alSelected[0]}
            </Button>
          </OverlayTrigger>)
      })
    return (
      <div>
        <Navbar collapseOnSelect className="editor-nav">
          <Navbar.Header>
            <Navbar.Brand tabIndex="999">
              <a href="#">Создание профиля</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <OverlayTrigger placement="bottom" overlay={tooltip('Сохранить')}>
                <NavItem eventKey={1} href="#" onClick={this.saveProfile} className="save-btn bg-success" disabled={this.state.saveDisabled}>
                  <span className="glyphicon glyphicon-floppy-disk"></span>
                </NavItem>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={tooltip('Отмена')}>
                <NavItem eventKey={2} href="#" className="cancel-btn bg-danger" onClick={() => this.clearState()}>
                  <span className="glyphicon glyphicon-ban-circle"></span>
                </NavItem>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={tooltip('Случайная генерация квенты')}>
                <NavItem eventKey={2} href="#" className="quenta-rnd-btn bg-info" onClick={() => this.randomizeQuenta()} >
                  <span className="glyphicon glyphicon-random"></span>
                </NavItem>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <ButtonGroup className="gender-selectgroup" justified>
          <Button id="maleGender" href="#" onClick={this.selectGender} className={this.state.gender === 'M' ? 'btn-success' : ''}>Мужской</Button>
          <Button id="femaleGender" href="#" onClick={this.selectGender} className={this.state.gender === 'F' ? 'btn-success' : ''}>Женский</Button>
          <Button id="otherGender" href="#" onClick={this.selectGender} className={this.state.gender === 'O' ? 'btn-success' : ''}>Другой</Button>
        </ButtonGroup>

        <FormGroup controlId="name" validationState={this.getValidationState()}>
          <InputGroup>
            <InputGroup.Addon>Имя</InputGroup.Addon>
            <FormControl type="text" value={this.state.name} placeholder="Имя персонажа" onChange={this.handleChange} />
            <FormControl.Feedback />
            <InputGroup.Button>
              <OverlayTrigger placement="bottom" overlay={tooltip('Случайная генерация')}>
                <Button onClick={() => this.randomizeName()}><span className="glyphicon glyphicon-retweet"></span></Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
          <HelpBlock style={this.getValidationState() === 'error' ? { display: 'block' } : { display: 'none' }}>Имя персонажа не должно быть пустым</HelpBlock>
        </FormGroup>

        <FormGroup controlId="race">
          <InputGroup>
            <InputGroup.Addon>Раса</InputGroup.Addon>
            <FormControl value={this.state.race.name} placeholder="Выберите расу" componentClass="select" onChange={this.handleChange}>
              {[{ name: '(Выберите расу)' }, ...this.props.store.raceReducer.races].map((race, i) => <option value={race.name} key={i}>{race.name}</option>)}
            </FormControl>
            <InputGroup.Button>
              <OverlayTrigger placement="bottom" overlay={tooltip('Случайный выбор расы')}>
                <Button onClick={() => this.randomizeRace()}><span className="glyphicon glyphicon-retweet"></span></Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>

        <FormGroup controlId="subRace" style={{ display: this.state.race.subraces.length ? 'block' : 'none' }}>
          <InputGroup>
            <InputGroup.Addon>Под-раса</InputGroup.Addon>
            <FormControl value={this.state.subRace.name} placeholder="Выберите под-расу" componentClass="select" onChange={this.handleChange}>
              {this.state.race.subraces.map((race, i) => <option value={race.name} key={i}>{race.name}</option>)}
            </FormControl>
            <InputGroup.Button>
              <OverlayTrigger placement="bottom" overlay={tooltip('Случайный выбор под-расы')}>
                <Button onClick={() => this.randomizeSubRace()}><span className="glyphicon glyphicon-retweet"></span></Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>

        <FormGroup controlId="age">
          <InputGroup>
            <InputGroup.Addon>Возраст</InputGroup.Addon>
            <FormControl type="number" value={this.state.age} min="1" placeholder="1 ... ∞" onChange={this.handleChange} />
          </InputGroup>
        </FormGroup>

        <Panel header="Описание">
          <p className="panel-title-horizontal"></p>
          <textarea className="form-control" id="description" onChange={this.handleChange} value={this.state.description} rows="3" />
        </Panel>

        <Panel>
          <p className="panel-title">Мировоззрение</p>
          <div className="btn-group">
            {alignments}
          </div>
        </Panel>

        <SkillBlock />

        <Button id="save-profile-btn" className="btn btn-success" onClick={this.saveProfile} disabled={this.state.saveDisabled}>Сохранить профиль</Button>
      </div>
    )
  }

}

export default connect(state => ({ store: state }))(NewProfile)