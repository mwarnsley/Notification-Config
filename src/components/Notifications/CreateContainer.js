import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
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

import Input from '../common/Input';
import CreateCard from './CreateCard';

class CreateContainer extends Component {
  constructor() {
    super();

    this.state = {
      types: [],
      events: [],
      email: '',
      text: '',
      orderNumber: '',
      url: '',
      headerType: '',
      body: '',
    };
    this.saveNotification = this.saveNotification.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onEventChange = this.onEventChange.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onHeaderChange = this.onHeaderChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
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
  onOrderChange(e) {
    const orderNumber = e.target.value;
    this.setState({
      orderNumber: orderNumber
    });
  }
  onUrlChange(e) {
    const URL = e.target.value;
    this.setState({
      url: URL
    });
  }
  onHeaderChange(e) {
    const headerType = e.target.value;
    this.setState({
      headerType: headerType
    });
  }
  onBodyChange(e) {
    const body = e.target.value;
    this.setState({
      body: body
    });
  }
  saveNotification() {
    const {dispatch} = this.props;
    const orderNumber = this.state.orderNumber;
    const types = this.state.types;
    const events = this.state.events;
    const email = this.state.email;
    const text = this.state.text;
    const URL = this.state.url;
    const headerType = this.state.headerType;
    const body = this.state.body;
    const newNotificationObj = {
      active: true,
      orderNumber: orderNumber,
      type: types,
      events: events,
      email: email,
      text: text,
      api: {
        url: URL,
        headerType: headerType,
        body: body
      }
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
          <p className="description">Here you can create new notifications. To save, click save notification at the bottom of the screen.</p>
          <CreateCard title={'Order Number'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter Order Number"
                onChange={this.onOrderChange}
                ref="order" />
            </FormGroup>
          </CreateCard>
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
                onChange={this.onEmailChange}
                ref="email" />
            </FormGroup>
          </CreateCard>
          <CreateCard title={'Text'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter Number"
                onChange={this.onTextChange}
                ref="text" />
            </FormGroup>
          </CreateCard>
          <CreateCard title={'API'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter URL"
                className="api-input"
                onChange={this.onUrlChange}
                ref="url" />
              <FormControl
                componentClass="select"
                onChange={this.onHeaderChange}
                className="api-input">
                <option value="">Select Header Type</option>
                <option value="application/base64">application/base64</option>
                <option value="application/javascript">application/javascript</option>
                <option value="application/json">application/json</option>
                <option value="application/octet-stream">application/octet-stream</option>
                <option value="application/xml">application/xml</option>
                <option value="text/css">text/css</option>
                <option value="text/html">text/html</option>
                <option value="text/plain">text/plain</option>
              </FormControl>
              <FormControl
                componentClass="textarea"
                placeholder="Request Body"
                onChange={this.onBodyChange}
                className="api-text-input" />
            </FormGroup>
          </CreateCard>
        </Row>
        <Row className="save-btn-container">
          <Link
            onClick={this.saveNotification}
            className="btn-save"
            to="/">
            Save Notification
          </Link>
        </Row>
      </Grid>
    );
  }
}

CreateContainer.propTypes = {
  /**
   * Function to dispatch actions from Redux
   */
  dispatch: PropTypes.func,
  /**
   * Array of notifications coming back from the state
   */
  notifications: PropTypes.array,
  /**
   * Array of available types coming back from the state
   */
  types: PropTypes.array,
  /**
   * Array of available events coming from the state
   */
  events: PropTypes.array,
};

export default connect(state => ({
  notifications: state.notifications.notifications,
  types: state.notifications.types,
  events: state.notifications.events
}))(CreateContainer);
