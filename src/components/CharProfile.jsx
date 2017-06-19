import React, { Component } from 'react'
import { Button, ButtonGroup, Panel, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import store from '../store'
import { ACTION_TYPES as QuentaActions } from '../reducers/quenta-reducer'
import { createTextParagraphs } from '../application-utils'
import './styles/CharProfile.css'

class CharProfile extends Component {
  removeProfile(evt, proxy, quenta) {
    store.dispatch({ type: QuentaActions.QUENTA_DELETE, payload: quenta })
    this.props.router.push("/")
  }

  render() {
    let { quentas } = this.props.store.quentaReducer
    let currenQuenta = quentas.find(q => q.name === this.props.location.pathname.split('/').slice(-1)[0])
    let skillRows = currenQuenta ? currenQuenta.skills.map((skill, i) => (
      <tr key={i}>
        <td><img src={skill.skillset.pic} alt={skill.skillset.name} className="skill-img"/></td>
        <td>{skill.name}</td>
        <td>{skill.level ? 'Уровень: ' + skill.level : ''}</td>
      </tr>
    )) : null

    if (currenQuenta) {
      return (
        <div>
          <h1>{currenQuenta.name}</h1>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img id="quenta-pic" src={currenQuenta.picture ? currenQuenta.picture : './img/no_img_placeholder.jpg'} alt="No profile pic" />
            </div>
            <div className="col-sm-8 col-md-8 col-lg-8">
              <Panel header="Общая информация" id="info-block">
                <Table fill>
                  <tbody>
                    <tr>
                      <td className="descr-property-name">Пол</td>
                      <td className="descr-property-value">{currenQuenta.gender}</td>
                    </tr>
                    <tr>
                      <td className="descr-property-name">Возраст</td>
                      <td className="descr-property-value">{currenQuenta.age}</td>
                    </tr>
                    <tr>
                      <td className="descr-property-name">Раса</td>
                      <td className="descr-property-value">{currenQuenta.race.name}</td>
                    </tr>
                    <tr>
                      <td className="descr-property-name">Мировоззрение</td>
                      <td className="descr-property-value">{currenQuenta.alignment[1]}</td>
                    </tr>
                  </tbody>
                </Table>
              </Panel>
              {
                currenQuenta.description ? <Panel header="Описание" id="info-block">{createTextParagraphs(currenQuenta.description)}</Panel> : null
              }
            </div>
          </div>
          <Panel header="Умения персонажа" id="info-block">
            <Table fill>
              <tbody>
                {skillRows.length? skillRows : <tr><td>(Персонаж не имеет умений)</td></tr>}
              </tbody>
            </Table>
          </Panel>
          <ButtonGroup justified className="profile-actions">
            <Button className="btn btn-primary" href="#">Редактировать квенту</Button>
            <Button className="btn btn-danger" onClick={(e, p, quenta) => this.removeProfile(e, p, currenQuenta)} href="#">Удалить квенту</Button>
          </ButtonGroup>
        </div>
      )
    } else {
      return <div>Профиль персонажа не найден</div>
    }
  }
}

export default connect(state => ({ store: state }))(CharProfile)