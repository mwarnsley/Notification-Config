import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
          name={`Order: ${notification.orderNumber}`}
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
          <p className="description">Here you can view a list of your current notifications that you have enabled.</p>
          {notificationList}
        </Row>
      </Grid>
    );
  }
}

CardContainer.propTypes = {
  /**
   * Function that dispatches the actions from Redux
   */
  dispatch: PropTypes.func,
  /**
   * Array of the list of notifications saved in the state
   */
  notifications: PropTypes.array.isRequired,
};

export default connect(state => ({
  notifications: state.notifications.notifications
}))(CardContainer);
