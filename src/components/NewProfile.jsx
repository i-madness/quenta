import React, { Component } from 'react'
import store from '../store'
import {
  FormControl, FormGroup, HelpBlock, Navbar, NavItem, Nav, InputGroup, Button,
  OverlayTrigger, Tooltip, ButtonGroup
} from 'react-bootstrap'
import Quenta from '../model/quenta'
import NameFactory, { Genders } from '../logic/name-generator'
import './styles/NewProfile.css'

/**
 * Создаёт tooltip с указанным текстом
 * @param {String} text текст всплывающей подсказки
 */
const tooltip = text => <Tooltip id="tooltip">{text}</Tooltip>

/**
 * Компонент для создания новых квент
 */
export default class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      gender: Genders.MALE
    }
    this.saveProfile = this.saveProfile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.selectGender = this.selectGender.bind(this)
  }

  /**
   * Сохранить квенту
   */
  saveProfile() {
    let { name, gender, description } = this.state
    store.dispatch({ type: 'QUENTA_CREATED', payload: new Quenta(name, gender, description) })
  }

  /**
   * Валидация формы
   */
  getValidationState() {
    const length = this.state.name.length;
    if (length) {
      return 'success'
    } else {
      return 'error'
    }
  }

  /**
   * Обработка изменений на форме и сохранение в локальное состояние
   * @param {Event} e 
   */
  handleChange(e) {
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
      name: NameFactory.getRandomName(this.state.gender)
    })
  }

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

render() {
  return (
    <div>
      <Navbar collapseOnSelect className="editor-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Создание профиля</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <OverlayTrigger placement="bottom" overlay={tooltip('Сохранить')}>
              <NavItem eventKey={1} href="#" onClick={this.saveProfile} className="save-btn">
                <span className="glyphicon glyphicon-floppy-disk"></span>
              </NavItem>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltip('Отмена')}>
              <NavItem eventKey={2} href="#" className="cancel-btn"><span className="glyphicon glyphicon-ban-circle"></span></NavItem>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ButtonGroup className="gender-selectgroup" justified>
        <Button id="maleGender" href="#" onClick={this.selectGender} className={this.state.gender === 'M' ? 'btn-primary' : ''}>Мужской</Button>
        <Button id="femaleGender" href="#" onClick={this.selectGender} className={this.state.gender === 'F' ? 'btn-primary' : ''}>Женский</Button>
        <Button id="otherGender" href="#" onClick={this.selectGender} className={this.state.gender === 'O' ? 'btn-primary' : ''}>Другой</Button>
      </ButtonGroup>
      <FormGroup controlId="name" validationState={this.getValidationState()}>
        <InputGroup>
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
      <FormGroup controlId="description">
        <FormControl type="text" value={this.state.description} placeholder="Описание..." onChange={this.handleChange} />
      </FormGroup>
    </div>
  )
}

}