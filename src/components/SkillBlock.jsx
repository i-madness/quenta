import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Panel, Table } from 'react-bootstrap'
import { groupBy } from 'lodash'
import store from '../store'
import { ACTION_TYPES as SkillActions } from '../reducers/skill-reducer'
import './styles/SkillBlock.css'

/**
 * Блок на странице создания квенты, отвечающий за выбор умений персонажа
 */
class SkillBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSkillSets: false,
      skillSetToShow: null
    }
  }

  toggleShowSkillSets() {
    this.setState({
      ...this.state,
      showSkillSets: !this.state.showSkillSets,
      skillSetToShow: null
    })
  }

  selectSkillSet(event, proxy, setName) {
    this.setState({
      ...this.state,
      showSkillSets: false,
      skillSetToShow: this.props.store.skillReducer.skillsets.find(ss => ss.name === setName)
    })
  }

  blockMapper(s, i) {
    return (
      <Panel className="set-panel" onClick={(e, prx, idx) => this.selectSkillSet(e, prx, s.name)} key={i}>
        <img src={s.pic} style={{ float: 'left' }} alt={s.name} /> {s.name}
      </Panel>
    )
  }

  renderBlockHeader() {
    if (!this.state.skillSetToShow && this.state.showSkillSets) {
      return null
    }
    let buttonText = this.props.store.skillReducer.currentQuentaSkills.length && this.state.skillSetToShow ? 'Вернуться к списку умений' : 'Добавить умения'
    return (
      <div className="skillblock-header">
        <Button className="btn btn-info" onClick={() => this.toggleShowSkillSets()}>{buttonText}</Button>
      </div>
    )
  }

  renderSingleSet() {
    let { skillSetToShow } = this.state
    if (!skillSetToShow) {
      return null
    }
    let skillRows = skillSetToShow.skills.map((skill, i) => (
      <tr key={i}>
        <td><img src={skillSetToShow.pic} alt={skill.name} style={{ float: 'left' }} /></td>
        <td>{skill.name}</td>
        <td>{skill.level ? 'Уровень: ' + skill.level : ''}</td>
        <td><Button className="btn btn-success addskill-btn" onClick={(e, p, s) => this.addSkillToQuenta(e, p, skill)}><span className="glyphicon glyphicon-plus"></span></Button></td>
      </tr>
    ))
    return (
      <Panel header={skillSetToShow.name} id="selected-skillset-panel">
        <Table fill>
          <tbody>
            {skillRows}
          </tbody>
        </Table>
      </Panel>
    )
  }

  addSkillToQuenta(event, proxy, skill) {
    store.dispatch({ type: SkillActions.QUENTA_ADD_SKILL, payload: skill })
  }

  delSkillFromQuenta(event, proxy, skill) {
    store.dispatch({ type: SkillActions.QUENTA_REMOVE_SKILL, payload: skill })
  }

  render() {
    let groups = groupBy(this.props.store.skillReducer.skillsets, 'superset')
    let groupPanels = Object.keys(groups).map((group, i) =>
      <Panel className="superset-panel" header={group} key={i}>
        {groups[group].map(this.blockMapper.bind(this))}
      </Panel>
    )
    let currentSkillRows = this.props.store.skillReducer.currentQuentaSkills.map((skill, i) => (
      <tr key={i}>
        <td><img src={skill.skillset.pic} alt={skill.skillset.name} /></td>
        <td>{skill.name}</td>
        <td>{skill.level ? 'Уровень: ' + skill.level : ''}</td>
        <td>
          <Button className="btn btn-danger addskill-btn" onClick={(e, p, name) => this.delSkillFromQuenta(e, p, skill.name)} >
            <span className="glyphicon glyphicon-remove"></span>
          </Button>
        </td>
      </tr>
    ))
    return (
      <Panel id="skillblock" header="Умения персонажа">
        <Table fill>
          <tbody>
            {currentSkillRows}
          </tbody>
        </Table>
        {this.renderBlockHeader()}
        {this.state.showSkillSets ? <div id="group-panels">{groupPanels}</div> : null}
        {this.renderSingleSet()}
      </Panel>
    );
  }
}

export default connect(state => ({ store: state }))(SkillBlock)