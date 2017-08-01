import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {updateNotification} from '../../actions/notificationActions';
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

class UpdateContainer extends Component {
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
  updateNotification(_id) {
    const {dispatch, notifications, params} = this.props;
    const notificationToUpdate = notifications.find(notification => params.id === notification._id);
    const orderNumber = this.state.orderNumber || notificationToUpdate.orderNumber;
    const types = this.state.types.length === 0 ? notificationToUpdate.type : this.state.types;
    const events = this.state.events.length === 0 ? notificationToUpdate.events : this.state.events;
    const email = this.state.email || notificationToUpdate.email;
    const text = this.state.text || notificationToUpdate.text;
    const URL = this.state.url || notificationToUpdate.api.url;
    const headerType = this.state.headerType || notificationToUpdate.api.headerType;
    const body = this.state.body || notificationToUpdate.api.body;
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
    console.log(_id);
    dispatch(updateNotification(_id, newNotificationObj));
  }
  render() {
    const {types, notifications, events, params} = this.props;
    const notificationToUpdate = notifications.find(notification => params.id === notification._id);
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
          <h1 className="create-notification-title">Update Notification</h1>
          <p className="description">Here you can update the notification you clicked on. To save, click the update notification button at the bottom of the screen.</p>
          <CreateCard title={'Order Number'}>
            <FormGroup>
              <FormControl
                type="text"
                defaultValue={notificationToUpdate.orderNumber}
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
                defaultValue={notificationToUpdate.email}
                onChange={this.onEmailChange}
                ref="email" />
            </FormGroup>
          </CreateCard>
          <CreateCard title={'Text'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter Number"
                defaultValue={notificationToUpdate.text}
                onChange={this.onTextChange}
                ref="text" />
            </FormGroup>
          </CreateCard>
          <CreateCard title={'API'}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter URL"
                defaultValue={notificationToUpdate.api.url}
                className="api-input"
                onChange={this.onUrlChange}
                ref="url" />
              <FormControl
                componentClass="select"
                onChange={this.onHeaderChange}
                defaultValue={notificationToUpdate.api.headerType}
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
                defaultValue={notificationToUpdate.api.body}
                onChange={this.onBodyChange}
                className="api-text-input" />
            </FormGroup>
          </CreateCard>
        </Row>
        <Row className="save-btn-container">
          <Link
            onClick={() => this.updateNotification(notificationToUpdate._id)}
            className="btn-save"
            to="/">
            Update Notification
          </Link>
        </Row>
      </Grid>
    );
  }
}

UpdateContainer.propTypes = {
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
}))(UpdateContainer);
