import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getSkillsets } from '../logic/skillset-provider'

/**
 * Дочерний роут NewProfile, выбор умений для персонажа
 */
class SkillBlock extends Component {
  constructor(props) {
    super(props)
    getSkillsets().then(skillsets => this.skillsets = skillsets)
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(state => ({ store: state }))(Skillset)