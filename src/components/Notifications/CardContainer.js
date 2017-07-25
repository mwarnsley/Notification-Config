import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import {getNotifications} from '../../actions/notificationActions';

import NotificationCard from './NotificationCard';

class CardContainer extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getNotifications());
  }
  render() {
    const {notifications} = this.props;
    const notificationList = notifications.map((notification, index) => {
      console.log(notification);
      const events = notification.events.map((item, i) => {
        return ` ${item}`;
      });
      return (
        <NotificationCard
          key={index}
          name={`Order: ${notification.name}`}
          type={`type: ${notification.type} `}
          events={`events: ${events}`}
          email={`email: ${notification.email}`}
          text={`text: ${notification.text}`}/>
      );
    });
    return (
      <Grid>
        <Row>
          <h1 className="notification-list-title">Notification List</h1>
          {notificationList}
        </Row>
      </Grid>
    );
  }
}

export default connect(state => ({
  notifications: state.notifications.notifications
}))(CardContainer);
