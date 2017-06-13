import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

/**
 * Дочерний роут NewProfile, выбор умений для персонажа
 */
class SkillView extends Component {
  render() {
    let { skillset } = this.props
    let skills = skillset.skills.map((s, i) => <li key={i}>{s.name} / <i>(lvl {s.level})</i></li>)
    return (
      <Panel>
        <img src={skillset.pic} />
        <ul>
          {skills}
        </ul>
      </Panel>
    );
  }
}
