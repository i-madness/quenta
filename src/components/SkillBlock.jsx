import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
//import { getSkillsets } from '../logic/skillset-provider'
import './styles/SkillBlock.css'

const setBlock = (s,i) => <Panel className="set-panel" key={i}><img src={s.pic} style={{float: 'left'}} alt={s.name}/> {s.name}</Panel>

/**
 * Дочерний роут NewProfile, выбор умений для персонажа
 */
class SkillBlock extends Component {
  render() {
    let skillsetList = this.props.store.skillReducer.skillsets.map(setBlock)

    return (
      <Panel id="skillblock" header="Умения персонажа">
        {skillsetList}       
      </Panel>
    );
  }
}

export default connect(state => ({ store: state }))(SkillBlock)