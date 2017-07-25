import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../common/Input';
import CreateCard from './CreateCard';
import {saveNotificationProfile} from '../../actions/notificationActions';
import {
  Grid,
  Row,
  Well,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button} from 'react-bootstrap';

class CreateContainer extends Component {
  constructor() {
    super();

    this.state = {
      types: [],
      events: [],
      email: '',
      text: ''
    };
    this.saveNotification = this.saveNotification.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onEventChange = this.onEventChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }
  onTypeChange() {
    const inputs = document.getElementsByClassName('type-check');
    const typeArr = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        typeArr.push(inputs[i].name);
      }
    }
    this.setState({
      types: typeArr
    });
  }
  onEventChange() {
    const inputs = document.getElementsByClassName('event-check');
    const eventArr = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        eventArr.push(inputs[i].name);
      }
    }
    this.setState({
      events: eventArr
    });
  }
  onEmailChange(e) {
    const email = e.target.value;
    this.setState({
      email: email
    });
  }
  onTextChange(e) {
    const text = e.target.value;
    this.setState({
      text: text
    });
  }
  saveNotification() {
    const {dispatch} = this.props;
    console.log(history);
    const types = this.state.types;
    const events = this.state.events;
    const email = this.state.email;
    const text = this.state.text;
    const newNotificationObj = {
      type: types,
      events: events,
      email: email,
      text: text
    };
    dispatch(saveNotificationProfile(newNotificationObj));
  }
  render() {
    const {types, notifications, events} = this.props;
    const noteTypes = types.map((type) => {
      return (
        <div className="type-container" key={type}>
          <Input
            type="checkbox"
            name={type}
            onChange={this.onTypeChange}
            classes="type-check"
          />
          {type}
        </div>
      );
    });
    const eventList = events.map((eventType) => {
      return (
        <div className="event-container" key={eventType}>
          <Input
            type="checkbox"
            name={eventType}
            onChange={this.onEventChange}
            classes="event-check"
          />
          {eventType}
        </div>
      );
    });
    return (
      <Grid>
        <Row>
          <h1 className="create-notification-title">Create Notification</h1>
          <CreateCard title={'Type'}>
            {noteTypes}
          </CreateCard>
          <CreateCard title={'Events'}>
            {eventList}
          </CreateCard>
          <CreateCard title={'Email'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter Email"
                onChange={e => this.onEmailChange(e)}
                ref="email" />
            </FormGroup>
          </CreateCard>
          <CreateCard title={'Text'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter Number"
                onChange={e => this.onTextChange(e)}
                ref="text" />
            </FormGroup>
          </CreateCard>
          <CreateCard title={'API'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter URL"
                className="api-input"
                ref="url" />
              <FormControl
                type="text"
                className="api-input"
                placeholder="Enter Header"
                ref="header" />
              <FormControl
                componentClass="textarea"
                placeholder="Request Body"
                className="api-text-input" />
            </FormGroup>
          </CreateCard>
        </Row>
        <Row>
          <Button
            onClick={this.saveNotification}
            className="btn-save"
            bsSize="large">
            Save Notification
          </Button>
        </Row>
      </Grid>
    );
  }
}

export default connect(state => ({
  notifications: state.notifications.notifications,
  types: state.notifications.types,
  events: state.notifications.events
}))(CreateContainer);
