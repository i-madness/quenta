import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FormControl, FormGroup, InputGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import presetMap from '../logic/preset-manager'
import './styles/Settings.css'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presets: { ...presetMap },
      selectedPreset: null
    }
  }

  render() {
    return (
      <div id="settings-panel">
        <FormGroup controlId="preset">
          <InputGroup>
            <InputGroup.Addon>Выбранный пресет</InputGroup.Addon>
            <FormControl value={this.state.selectedPreset} placeholder="Выберите расу" componentClass="select">
            </FormControl>
            <InputGroup.Button>
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Выберите файл</Tooltip>}>
                <Button onClick={() => { }}><span className="glyphicon glyphicon-retweet"></span></Button>
              </OverlayTrigger>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>

        <Button id="save-profile-btn" className="btn btn-success">Сохранить настройки</Button>
      </div>
    )
  }
}

export default connect(state => ({ store: state }))(Settings)