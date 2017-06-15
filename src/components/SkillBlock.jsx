import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Panel } from 'react-bootstrap'
import { groupBy } from 'lodash'
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

  selectSkillSet(event, proxy, setName) {
    this.setState({
      ...this.state,
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

  render() {
    let groups = groupBy(this.props.store.skillReducer.skillsets, 'superset')
    let groupPanels = Object.keys(groups).map((group, i) =>
      <Panel className="superset-panel" header={group} key={i}>
        {groups[group].map(this.blockMapper.bind(this))}
      </Panel>
    )

    return (
      <Panel id="skillblock" header="Умения персонажа">
        <div className="skillblock-header">
          <Button className="btn btn-info">Добавить умения</Button>
        </div>
        {groupPanels}
      </Panel>
    );
  }
}

export default connect(state => ({ store: state }))(SkillBlock)