import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Modal, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router';

import NotificationCard from './NotificationCard';
import Toggle from './Toggle';

import {getNotifications} from '../../actions/notificationActions';
import {updateNotification} from '../../actions/notificationActions';
import {deleteNotification} from '../../actions/notificationActions';

class ManageContainer extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      id: ''
    };

    this.close = this.close.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getNotifications());
  }
  open(id) {
    this.setState({
      showModal: true,
      id: id
    });
  }
  close() {
    this.setState({
      showModal: false,
    });
  }
  toggleActiveStatus(id) {
    const {notifications, dispatch} = this.props;
    const currentNotification = notifications.find(notification => notification._id === id);
    let activeStatus = currentNotification.active ? false : true;
    const updateStatusNotification = {
      active: activeStatus,
      orderNumber: currentNotification.orderNumber,
      type: currentNotification.types || [],
      events: currentNotification.events || [],
      email: currentNotification.email,
      text: currentNotification.text,
      api: {
        url: currentNotification.api.URL || '',
        headerType: currentNotification.api.headerType || '',
        body: currentNotification.api.body || ''
      }
    };
    dispatch(updateNotification(id, updateStatusNotification));
  }
  deleteNotification() {
    const {dispatch} = this.props;
    const deleteId = this.state.id;
    dispatch(deleteNotification(deleteId));
    this.setState({
      showModal: false,
    });
  }
  render() {
    const {notifications} = this.props;
    const notificationList = notifications.map((notification, index) => {
      const events = notification.events.map((item, i) => {
        return ` ${item}`;
      });
      const activeNotification = notification.active ? 'Active' : 'Non-Active';
      return (
        <div key={index}>
          <NotificationCard
            key={index}
            active={`Status: ${activeNotification}`}
            name={`Order: ${notification.orderNumber}`}
            type={`type: ${notification.type}`}
            events={`events: ${events}`}
            email={`email: ${notification.email}`}
            text={`text: ${notification.text}`}
            api={`api: url: ${notification.api.url || ''} header: ${notification.api.headerType || ''} body: ${notification.api.body || ''}`}>
            <Row>
              <Col xs={12} sm={4}>
                <Link
                  className="btn btn-sm edit-btn"
                  to={`/update/${notification._id}`}>
                  Edit
                </Link>
              </Col>
              <Col xs={12} sm={4}>
                <Button
                  onClick={() => this.open(notification._id)}
                  bsStyle="danger"
                  bsSize="small">
                    Delete
                </Button>
              </Col>
              <Col xs={12} sm={4}>
                <Toggle
                  toggleActive={(id) => this.toggleActiveStatus(id)}
                  active={notification.active}
                  id={notification._id}/>
              </Col>
            </Row>
          </NotificationCard>
        </div>
      );
    });
    return (
      <Grid>
        <Row>
          <div className="manage-container">
            <div className="manage-title-container">
              <h1>Manage Notifications</h1>
              <Link className="create-link" to="/create">
                <span className="create-container">
                  <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                  Create Notification
                </span>
              </Link>
            </div>
            <div className="clearfix"></div>
            <p className="description">Please select which notification you would like to manage. You can turn notifications on/off or edit the notifications from this screen.</p>
            <Row>
              {notificationList}
            </Row>
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>Are you sure you want to delete this notifcation?</h6>
              <p>Once you delete this notification, you will have to create it again to turn it on.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="danger" onClick={this.deleteNotification}>Delete</Button>
              <Button onClick={this.close}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Grid>
    );
  }
}

ManageContainer.propTypes = {
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
}))(ManageContainer);
